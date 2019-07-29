
// import React, { Component } from 'react'
// import axios from 'axios'
// import { Button, Form } from 'react-bootstrap'

// export default class Locations extends Component {
//     state = {
//         locations: [],
//         products: [],
//         newLocation: {
//             neighborhood: '',
//             address: ''
//         },
//         isLocationLinkClicked: false,
//         isCreateLocationClicked: false
//     }

    
//     componentDidMount() {
//         this.getAllLocations()
//     }
// // TO DO: CHANGE SO THAT IT REFRESHES THE PAGE WITH NEW LOCATION. TRY PASSING DOWN THE GET ALL LOCATIONS METHOD?
//     getAllLocations() {
//         axios.all([
//             axios.get('/api/locations'),
//             axios.get('/api/products')
//           ])
//           .then(axios.spread((locations, products) => {
//             //this callback will be executed only when both requests are complete.
//             this.setState({locations: locations.data})
//             this.setState({products: products.data})
//           }))
//     }

//     //handle change and submit for the create a location form

//     handleInputChange = (event) => {
//         const newLocation = {...this.state.newLocation}
//         newLocation[event.target.name] = event.target.value

//         this.setState({newLocation})
//     }

//     handleCreateSubmit = (event) => {
//         event.preventDefault()

//         axios.post('/api/locations', this.state.newLocation)
//             .then(() => {
//                 this.setState({isLocationLinkClicked: false})
//                 this.getAllLocations()
//             })
//     }

//     render() {

//         return (
           
//                         <Form>
//                             <Form.Group controlId="neighborhood">
//                                 <Form.Label>Neighborhood</Form.Label>
//                                 <Form.Control type="text" name="neighborhood" onChange={this.handleInputChange} value={this.state.newLocation.neighborhood} />
//                             </Form.Group>

//                             <Form.Group controlId="address">
//                                 <Form.Label>Address</Form.Label>
//                                 <Form.Control type="text" name="address" onChange={this.handleInputChange} value={this.state.newLocation.address} />
//                             </Form.Group>

//                             <Button variant="info" onClick={this.handleCreateSubmit}>Create Location</Button>
//                         </Form>
            
//         )
//     }
// }
