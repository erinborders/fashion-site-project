import React, { Component } from 'react'
import CreateLocationForm from './CreateLocationForm'
import { Alert } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import CreateProductForm from './CreateProductForm'

export default class AdminView extends Component {

    render() {
        return (
            <div>
           
                <div>
                    {/* <Link to="/users">Get All Users</Link> */}
                    <Alert.Link href="/users">Get All Users</Alert.Link>
                </div>
                {
                    this.props.onLocationPage ?
                    <div>
                    <CreateProductForm match={this.props.match}/>
                    </div> : null
                }
            </div>
        )
    }
}
