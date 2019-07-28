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
        inAdminView: false,
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
    
    showAdminView = () => {
        this.setState((state) => {
            return {inAdminView: !state.inAdminView}
        })
    }

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
                {/* TO DO: STYLE ADMIN BUTTON CONTENTS */}
                <div className="admin-button">
                <Button className="navbar-button" variant="outline-light" onClick={this.open}>Admin View</Button>
                </div>

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
                {/* {
                    this.state.inAdminView ?
                    <div>
                    <AdminView 
                        onHomePage={this.state.onHomePage}
                        showLogInModal={this.state.showLogInModal}
                        close={this.close}/>
                </div> : null
                } */}
                <div>
                    <Carousel className="home-carousel" interval="2000" fade="true" indicators={false} controls={false}>
                        <Carousel.Item >
                            <img 
                            src={Posing} 
                            // height="100%" 
                            width="100%"
                            // style={{objectFit: "contain"}}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            src={BlackGirlsDancing} 
                            // height="500px" 
                            width="100%"
                            // style={{objectFit: "contain"}}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            src={Walking} 
                            // height="500px" 
                            width="100%"
                            // style={{objectFit: "contain"}}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            src={SquadMagic} 
                            // height="500px" 
                            width="100%"
                            // style={{objectFit: "contain"}}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            src={PrimpingHair} 
                            // height="500px" 
                            width="100%"
                            // style={{objectFit: "contain"}}
                            />
                        </Carousel.Item>
                    </Carousel>
                    <span className="fashion-vera-title-home"><h1>Fashion Vera</h1></span>
                </div>
                {/* <div>
                    <img
                        src={TealOutfits}
                        height="500px" 
                        width="950px"
                        style={{objectFit: "contain"}}
                        />
                </div>
                <h1>Products</h1>
                <Products /> */}
                <Footer />
            </div>
        )
    }
}
