import React, { Component } from 'react'
import Locations from './Locations'
import LogIn from './LogIn'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    state = {
        isLoggedIn: false
    }

    render() {
        return (
            <div>
                {/* <a href="#">Search</a> */}
                <Locations />
                {
                    isLoggedIn ?
                    <Link to="/user-profile">Account</Link> :
                    <LogIn mockLogIn={this.props.mockLogIn}/>
                }
            </div>
        )
    }
}
