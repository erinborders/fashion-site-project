import React, { Component } from 'react'
import Locations from './Locations'
import LogIn from './LogIn'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    state = {
        isLoggedIn: false,
        newUser: {
            userName: '',
            password: ''
          },
        isLoggedIn: false
    }
    
      handleSubmit = (e) => {
        e.preventDefault()
        this.props.mockLogIn(this.state.newUser)
        this.setState({isLoggedIn: true})
        this.setState({redirect: true})
      }

      handleLogInToggle = () => {
        this.setState((state) => {
          return {isLoggedIn: !state.isLoggedIn}
      })
      }

    render() {
        return (
            <div style={{display: 'flex'}} >
                {/* <a href="#">Search</a> */}
                <Locations />
                {/* <Link to="">Account</Link> */}
                {
                    this.state.isLoggedIn ?
                    <LogIn 
                        isLoggedIn={this.state.isLoggedIn} 
                        mockLogIn={this.props.mockLogIn}
                        setStateOfUsers={this.props.setStateOfUsers}
                        handleSubmit={this.handleSubmit}/>
                    : <Button className="navbar-button" variant="outline-light" onClick={this.handleLogInToggle}>Log In</Button>
                    
                }
                {/* <LogIn isLoggedIn={this.state.isLoggedIn} 
                        mockLogIn={this.props.mockLogIn}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}/> */}
            </div>
        )
    }
}
