import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap'
import axios from 'axios';

export default class UserProfile extends Component {
    // TO DO: SET A LOCAL HISTORY FOR USERS

    refreshPage() {
        window.location.reload(false);
      }

    deleteUser = (e) => {
        e.preventDefault() 

        axios.delete(`/api/users/${this.props.id}`)
            .then(() => {
                this.refreshPage()
            })
    }

    render() {
        return (
            
                <React.Fragment>
                    <td>{this.props.id}</td>
                    <td>{this.props.userName}</td>
                    <td><Button variant="danger" onClick={this.deleteUser}>Delete</Button></td>
                </React.Fragment> 
            
        )
    }
}
