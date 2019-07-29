import React, { Component } from 'react'
import Posing from './images/posing.gif'
import BlackGirlsDancing from './images/black girls dancing.gif'
import Walking from './images/walking.gif'
import SquadMagic from './images/squad magic.gif'
import PrimpingHair from './images/primping hair.gif'
import Modal from 'react-bootstrap/Modal'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
import { Alert, Button, Form } from 'react-bootstrap'
import Footer from './Footer'

export default class Home extends Component {
    state = {
        onHomePage: true,
        showLogInModal: false,
        newLocation: {
            neighborhood: '',
            address: ''
        }
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

    //handle the input fields for the create location form
    handleInputChange = (event) => {
        const newLocation = {...this.state.newLocation}
        newLocation[event.target.name] = event.target.value

        this.setState({newLocation})
    }

    //handle the submit for the create location form
    handleCreateSubmit = (event) => {
        event.preventDefault()

        axios.post('/api/locations', this.state.newLocation)
            .then(() => {
                this.setState({isLocationLinkClicked: false})
                this.getAllLocations()
            })
    }

    //to open create account form modal
    getInitialState() {
        return { showLogInModal: false };
      }
    
      close =() => {
        this.setState({ showLogInModal: false });
      }
    
      open = () => {
        this.setState({ showLogInModal: true });
      }

    render() {
        return (
            <div>
              
              {/* opens admin view to show create location form and get all users link */}
                <div className="admin-button">
                <Button className="navbar-button" variant="outline-light" onClick={this.open}>Admin View</Button>
                </div>

                {/* the admin view modal */}
                <Modal show={this.state.showLogInModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Admin View</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h3>Get All Users</h3>
                    <Alert.Link href="/users">Get All Users</Alert.Link>
                    <h3>Create Shop Location</h3>
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
                    </Modal.Body>
                </Modal>
                
                <div>
                    <Carousel className="home-carousel" interval="2000" fade="true" indicators={false} controls={false}>
                        <Carousel.Item >
                            <img 
                            src={Posing}  
                            width="100%"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            src={BlackGirlsDancing} 
                            width="100%"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            src={Walking}  
                            width="100%"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            src={SquadMagic}  
                            width="100%"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            src={PrimpingHair}  
                            width="100%"
                            />
                        </Carousel.Item>
                    </Carousel>

                    {/* the fashion vera title */}
                    <span className="fashion-vera-title-home"><h1>Fashion Vera</h1></span>
                </div>
                
                <Footer />
            </div>
        )
    }
}
