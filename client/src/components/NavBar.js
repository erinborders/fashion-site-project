import React, { Component } from 'react'
import Locations from './Locations'
import LogIn from './LogIn'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    state = {
        isLoggedIn: false,
        newUser: {
            userName: '',
            password: ''
          }
        // isLoggedIn: this.props.location.state.isLoggedIn
    }
    
      handleSubmit = (e) => {
        e.preventDefault()
        this.props.mockLogIn(this.state.newUser)
        this.setState({isLoggedIn: true})
        this.setState({redirect: true})
      }

    render() {
        return (
            <div>
                {/* <a href="#">Search</a> */}
                <Locations />
                {/* <Link to="">Account</Link> */}
                {
                    this.state.isLoggedIn ?
                    <Link to={`/users/${this.props.newUser._id}`}>Account</Link> :
                    <LogIn 
                        isLoggedIn={this.state.isLoggedIn} 
                        mockLogIn={this.props.mockLogIn}
                        setStateOfUsers={this.props.setStateOfUsers}
                        handleSubmit={this.handleSubmit}/>
                }
                {/* <LogIn isLoggedIn={this.state.isLoggedIn} 
                        mockLogIn={this.props.mockLogIn}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}/> */}
            </div>
        )
    }
}
