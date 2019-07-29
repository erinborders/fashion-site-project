import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
import CreateProductForm from './CreateProductForm'

export default class AdminView extends Component {

    render() {
        return (
            <div>
           
                <div>
                    
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
