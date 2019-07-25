import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CreateLocationForm from './CreateLocationForm'

export default class AdminView extends Component {
    state = {
        onHomePage: false,
        onSingleLocationPage: false
    }

    render() {
        return (
            <div>
                <div>
                    <CreateLocationForm />
                </div>
                <div>
                    <Link to="/users">Get All Users</Link>
                </div>
            </div>
        )
    }
}
