import React, { Component } from 'react'
import UserProfile from './UserProfile';
import { Breadcrumb, Table } from 'react-bootstrap'
import city from './images/cityBuildings.jpg'

export default class Users extends Component {

    render() {
        
        let usersList = this.props.users.map(user => {
            return(
                
                <tr>
                    <UserProfile 
                        key={user._id}
                        userName={user.userName}
                        password={user.password}
                        id={user._id} />
                </tr>
            )
        })
        return (
            <React.Fragment>
                <Breadcrumb className="nav-breadcrumbs">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Users</Breadcrumb.Item>
                </Breadcrumb>
            <div className="users-component">
                <div className="users-content">
                <h1 className="user-header">Users</h1>
                <img className="users-background-image" src={city} alt="Picture of an apartment building" />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Username</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {usersList}
                        
                    </tbody>
                    
                </Table>
                </div>
                
            </div>
            </React.Fragment>
        )
    }
}
