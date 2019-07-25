import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class UserProfile extends Component {
    // state = {
    //     user: {
    //         userName: '',
    //         password: ''
    //     }
    // }
    
    // TO DO: SET A LOCAL HISTORY FOR USERS

    // componentDidMount() {
    //     this.getOneUser()
    // }
    
    // getOneUser() {
    //     axios.get(`/api/users/${this.props.id}`)
    //         .then(res => {
    //             console.log(res.data)
    //             this.setState({user: res.data})
    //             console.log(this.state.user)
    //         })
    // }

    deleteUser = (e) => {
        e.preventDefault() 

        axios.delete(`/api/users/${this.props.id}`)
            .then(res => {
                this.props.setStateOfUsers(res.data)
            })
    }

    render() {
        return (
            <div>
                {/* {
                    this.props.match ?
                    <div>
                        <h1>User Profile</h1>
                        <p>Username: {this.state.user.userName}</p>
                        <p>Password: {this.state.user.password}</p>
                    </div> :*/}
                    <div> 
                        <Link to={`/users/${this.props.id}`}>{this.props.id}</Link>
                        <p>{this.props.userName}</p>
                        <button onClick={this.deleteUser}>Delete</button>
                    </div>
                
            </div>
        )
    }
}
