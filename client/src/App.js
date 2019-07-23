import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SingleLocation from './components/SingleLocation'
import Products from './components/Products'
import UserProfile from './components/UserProfile'
import './App.css';

class App extends Component {
  state = {
    user: {
      userName: '',
      password: ''
    }
  }

  mockLogIn = (logInInfo) => {
      const newUser = {...this.state.user}
      newUser.userName = logInInfo.userName
      newUser.password = logInInfo.password
      this.setState({user: newUser})
  }

  render() {
    let UserComponent = () => <UserProfile 
        userName={this.state.user.userName} 
        password={this.state.user.password}/>

    return (
      <div className="App">
        <Router>
          <NavBar 
              user={this.state.user}
              userName={this.state.user.userName}
              password={this.state.user.password}
              mockLogIn={this.mockLogIn} />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/locations/:locationId" render={(props) => <SingleLocation {...props}/>} />
            <Route path="/products" render={(props) => <Products {...props} />} />
            <Route path="/user-profile"  render={UserComponent}/>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
