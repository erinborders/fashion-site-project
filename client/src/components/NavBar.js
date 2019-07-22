import React, { Component } from 'react'
import Locations from './Locations'

export default class NavBar extends Component {

    render() {
        return (
            <div>
                {/* <a href="#">Search</a> */}
                <Locations />
                {/* <a href="#">Log In</a> */}
            </div>
        )
    }
}
