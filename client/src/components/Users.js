import React, { Component } from 'react'
import UserProfile from './UserProfile';
import axios from 'axios'

export default class Users extends Component {

    render() {
        
        let usersList = this.props.users.map(user => {
            return(
                <div>
                    <UserProfile 
                        key={user._id}
                        userName={user.userName}
                        password={user.password}
                        id={user._id} />
                </div>
            )
        })
        return (
            <div>
                <h1>Users</h1>
                {usersList}
            </div>
        )
    }
}
