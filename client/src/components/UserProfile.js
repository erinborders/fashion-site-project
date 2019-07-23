import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserProfile extends Component {
    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <Link to="/">Home</Link>
                <p>Username: {this.props.userName}</p>
                {/* <p>Password: {this.props.password}</p> */}
            </div>
        )
    }
}
