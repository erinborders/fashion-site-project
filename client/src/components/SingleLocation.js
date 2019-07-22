import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Products from './Products'

export default class SingleLocation extends Component {
    state = {
        singleLocationsProducts: []
    }

    // getSingleLocationsProducts() {
    //     axios.get('/api/locations')
    //         .then(res => {
    //             return res.data.locationId === this.props.match.params.locationId
    //         .then(locationsProducts =>{
    //             this.setState({singleLocationsProducts: locationsProducts})
    //         })
    //         })
    // }

    render() {

        return (
            <div>
                <Link to={`/locations/${this.props.id}`}>{this.props.neighborhood}</Link>
                
                {
                    this.props.match
                        ? <div>Fashion Vera
                        <Products /></div>
                        : null
                }
            </div>
        )
    }
}
