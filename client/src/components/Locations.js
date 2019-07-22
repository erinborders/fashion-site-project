/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SingleLocation from './SingleLocation';

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class Locations extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        locations: [],
        newLocation: {
            neighborhood: '',
            address: ''
        },
        isLocationLinkClicked: false
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */
    componentDidMount() {
        this.getAllLocations()
    }

    getAllLocations() {
        axios.get('/api/locations')
            .then((res) => {
                this.setState({locations: res.data})
            })
    }

    handleCreateSubmit = (event) => {
        axios.post('/api/locations', this.state.newLocation)
            .then(() => {
                this.setState({isLocationLinkClicked: false})
                this.getAllLocations()
            })
    }

    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {

        let locationsList = this.state.locations.map((location, index) => {
            return(
                <div>
                    <SingleLocation
                        key={index}
                        neighborhood={location.neighborhood}
                        address={location.address}
                        id={location._id}
                        locationId={location.locationId}
                         />
                </div>
            )
        })
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                {
                    this.state.isLocationLinkClicked ?
                    <div>
                        {locationsList}
                    </div> : <div>Locations</div>
                        
                }
            </div>
        )
    }
}
