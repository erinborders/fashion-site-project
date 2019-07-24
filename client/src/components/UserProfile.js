import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class UserProfile extends Component {
    deleteUser = (e) => {
        e.preventDefault() 

        axios.delete(`/api/users/${this.props.id}`)
            .then(() => {
                console.log('deleted')
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.match ?
                    <div>
                        <h1>User Profile</h1>
                        <p>Username: {this.props.userName}</p>
                        <p>Password: {this.props.password}</p>
                    </div> :
                    <div>
                        <Link to={`/users/${this.props.id}`}>Username</Link>
                        <button onClick={this.deleteUser}>Delete</button>
                    </div>
                }
            </div>
        )
    }
}
