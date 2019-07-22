import React, { Component } from 'react'
import Locations from './Locations'
import Products from './Products'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Locations />
                <Products />
            </div>
        )
    }
}
