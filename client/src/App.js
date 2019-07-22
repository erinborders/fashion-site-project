import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SingleLocation from './components/SingleLocation'
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/locations/:locationId" render={(props) => <SingleLocation {...props}/>} />
            
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
