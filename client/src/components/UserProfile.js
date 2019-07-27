import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class UserProfile extends Component {
    state = {
        users: []
    }
    
    // TO DO: SET A LOCAL HISTORY FOR USERS

    componentDidMount() {
        this.getAllUsers()
    }
  
    getAllUsers() {
        axios.get('/api/users')
          .then(res => {
              this.setState({users: res.data})
          })
    }

    deleteUser = (e) => {
        e.preventDefault() 

        axios.delete(`/api/users/${this.props.id}`)
            .then(() => {
                this.getAllUsers()
            })
    }

    render() {
        return (
            <div>
                 
                        <Link to={`/users/${this.props.id}`}>{this.props.id}</Link>
                        <p>{this.props.userName}</p>
                        <button onClick={this.deleteUser}>Delete</button>

            </div>
        )
    }
}
