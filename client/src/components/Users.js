import React, { Component } from 'react'
import UserProfile from './UserProfile';
import axios from 'axios'

export default class Users extends Component {
    // state = {
    //     users: []
    // }

    // componentDidMount() {
    //     this.getAllUsers()
    // }
  
    // getAllUsers() {
    //     axios.get('/api/users')
    //       .then(res => {
    //           this.setState({users: res.data})
    //       })
    // }

    render() {
        
        let usersList = this.props.users.map((user, index) => {
            return(
                <div>
                    <UserProfile 
                        key={index}
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
