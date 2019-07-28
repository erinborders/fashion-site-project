/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
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
        products: [],
        newLocation: {
            neighborhood: '',
            address: ''
        },
        isLocationLinkClicked: false,
        isCreateLocationClicked: false
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
// TO DO: CHANGE SO THAT IT REFRESHES THE PAGE WITH NEW LOCATION
    getAllLocations() {
        axios.all([
            axios.get('/api/locations'),
            axios.get('/api/products')
          ])
          .then(axios.spread((locations, products) => {
            //... but this callback will be executed only when both requests are complete.
            this.setState({locations: locations.data})
            this.setState({products: products.data})
          }))
    }

    handleInputChange = (event) => {
        const newLocation = {...this.state.newLocation}
        newLocation[event.target.name] = event.target.value

        this.setState({newLocation})
    }

    handleCreateSubmit = (event) => {
        event.preventDefault()

        axios.post('/api/locations', this.state.newLocation)
            .then(() => {
                this.setState({isLocationLinkClicked: false})
                this.getAllLocations()
            })
    }

    
    handleLocationButtonToggle = () => {
        this.setState((state) => {
            return {isLocationLinkClicked: !state.isLocationLinkClicked}
        })
    }

    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {

        return (
            // <div>
                /* <h3>Add a Location</h3>
                 <form onSubmit={this.handleCreateSubmit}>
            <div>
              <label htmlFor="neighborhood">Neighborhood:</label>
              <input id="neighborhood" type="text" name="neighborhood" onChange={this.handleInputChange} value={this.state.newLocation.neighborhood} />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input id="address" type="text" name="address" onChange={this.handleInputChange} value={this.state.newLocation.address}/>
            </div>
            <button>Create Location</button>
          </form> */
                // <Modal>
                //     <Modal.Header closeButton>
                //         <Modal.Title>Add a Location</Modal.Title>
                //     </Modal.Header>
                //     <Modal.Body>
                        <Form>
                            <Form.Group controlId="neighborhood">
                                <Form.Label>Neighborhood</Form.Label>
                                <Form.Control type="text" name="neighborhood" onChange={this.handleInputChange} value={this.state.newLocation.neighborhood} />
                            </Form.Group>

                            <Form.Group controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" name="address" onChange={this.handleInputChange} value={this.state.newLocation.address} />
                            </Form.Group>

                            <Button variant="info" onClick={this.handleCreateSubmit}>Create Location</Button>
                        </Form>
                    /* </Modal.Body>
                </Modal> */
            
        )
    }
}
