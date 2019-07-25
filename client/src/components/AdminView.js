import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                    <Link to="/users">Get All Users</Link>
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
