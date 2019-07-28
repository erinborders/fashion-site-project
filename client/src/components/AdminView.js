import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import CreateLocationForm from './CreateLocationForm'
import CreateProductForm from './CreateProductForm'

export default class AdminView extends Component {

    render() {
        return (
            <div>
                {
                    this.props.onHomePage ?
                    <div>
                    <CreateLocationForm />
                    </div> : null
                }
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
