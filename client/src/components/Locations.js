import React, { Component } from 'react'
import axios from 'axios'
import SingleLocation from './SingleLocation';

export default class Locations extends Component {
    state = {
        locations: [],
        products: [],
        newLocation: {
            neighborhood: '',
            address: ''
        },
        isLocationLinkClicked: false,
        isCreateLocationClicked: false
    }

    componentDidMount() {
        this.getAllLocations()
    }

    getAllLocations() {
        axios.all([
            axios.get('/api/locations'),
            axios.get('/api/products')
          ])
          .then(axios.spread((locations, products) => {
            //this callback will be executed only when both requests are complete.
            this.setState({locations: locations.data})
            this.setState({products: products.data})
          }))
    }

    render() {

        let locationsList = this.state.locations.map((location, index) => {
            return(
                <div>
                    <SingleLocation
                        key={index}
                        neighborhood={location.neighborhood}
                        address={location.address}
                        id={location._id}
                         />
                </div>
            )
        })
        return (
            <div style={{display: 'flex'}}>
               
                    <div>
                        {/* to show locations in the location dropdown in the nav bar */}
                        {locationsList}
                    </div> 
                
            </div>
        )
    }
}
