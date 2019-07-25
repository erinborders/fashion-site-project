import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SingleLocation from './components/SingleLocation'
import Products from './components/Products'
import UserProfile from './components/UserProfile'
import Users from './components/Users'
import About from './components/About'
import ContactUs from './components/ContactUs'
import axios from 'axios'
import './App.css';
import SingleProduct from './components/SingleProduct.js';

class App extends Component {
  state = {
    users: [],
    newUser: {
      userName: '',
      password: ''
    }
  }

  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers() {
    axios.get('/api/users')
      .then(res => {
        this.setState({ users: res.data })
      })
  }

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.newUser }
    newUser.userName = logInInfo.userName
    newUser.password = logInInfo.password
    this.setState({ newUser })
  }

  setStateOfUsers = (users) => {
    this.setState({ users })
    this.getAllUsers()
  }

  render() {

    return (
      <div className="App">
        <Router>
          <NavBar
            newUser={this.state.newUser}
            userName={this.state.newUser.userName}
            password={this.state.newUser.password}
            setStateOfUsers={this.setStateOfUsers}
            mockLogIn={this.mockLogIn} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/locations/:locationId" render={(props) => <SingleLocation {...props} />} />
            {/* <Route path="/products/:productId" component={SingleProduct} /> */}
            <Route path="/products" render={(props) => <Products {...props} />} />
            <Route path="/users/:userId" render={(props) => <UserProfile {...props} setStateOfUsers={this.setStateOfUsers} users={this.state.users}/>} />
            {/* <Route path="/users/:userId" component={UserProfile} /> */}
            <Route path="/users" render={(props) => <Users {...props} users={this.state.users} />} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
