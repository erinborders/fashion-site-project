import React, { Component } from 'react'
import { Button, Card, Form, ListGroup, ListGroupItem, Col, Row } from 'react-bootstrap'
import axios from 'axios';

export default class SingleProduct extends Component {
    state = {
        product: {},
        hasInfoButtonBeenClicked: false
    }

    componentDidMount() {
        axios.get(`/api/products/${this.props.id}`)
            .then(res => {
                this.setState({product: res.data})
                console.log(this.state.product)
            })
    }

    handleInputChange = (event) => {
        const product = {...this.state.product}
        product[event.target.name] = event.target.value

        this.setState({product})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        axios.put(`/api/products/${this.props.id}`, this.state.product)
            .then(res => {
                this.setState({
                    product: res.data,
                    // isEditFormDisplayed: false
                })
            })
    }

    deleteProduct = () => {
        axios.delete(`/api/products/${this.props.id}`)
            .then(res => {
                this.setState({product: res.data})
            })
    }

    handleInfoToggle = () => {
        this.setState((state) => {
            return {hasInfoButtonBeenClicked: !state.hasInfoButtonBeenClicked}
        })
    }

    render() {
        return (
            <div>
                
                {/* TO DO: PUT IMAGES INTO TEST DATA FOR HEROKU */}
                
                <Card style={{width: '30rem'}}>
                    {/* if there's an image, show it */}
                    {
                        this.state.product.image ?
                        <div>
                        <Card.Img 
                            variant="top" 
                            src={this.state.product.image} 
                            alt={`A picture of ${this.props.name}`} 
                            style={{height: '400px', objectFit: 'contain'}}/>
                        </div> : null
                    }
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        {
                            this.state.hasInfoButtonBeenClicked ?
                            <Card.Text>
                                {this.props.description}
                            </Card.Text> : null
                        }
                        <Card.Text>${this.props.price}</Card.Text>
                        <Button variant="outline-info" >Buy</Button>
                        <Button variant="outline-info" onClick={this.handleInfoToggle}>Details</Button>
                    </Card.Body>
                    {
                        this.props.inAdminView ?
                        <div>
                            <ListGroup>
                                <ListGroupItem>
                            <Button variant="danger" onClick={this.deleteProduct}>Delete {this.props.name}</Button></ListGroupItem>
                        <h2>Edit form</h2>
                
                    <ListGroupItem>
                <Form>
                    <Row>
                        <Col>
                        <Form.Group controlId="product-name" >
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control size="sm" type="text" name="name" onChange={this.handleInputChange} value={this.state.product.name} />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group controlId="product-description">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control size="sm" type="text" name="description" onChange={this.handleInputChange} value={this.state.product.description} />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group controlId="product-size">
                            <Form.Label>Product Size</Form.Label>
                            <Form.Control size="sm" name="size" onChange={this.handleInputChange} value={this.state.product.size} />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group controlId="product-colors">
                            <Form.Label>Product Colors</Form.Label>
                            <Form.Control size="sm" name="colors" onChange={this.handleInputChange} value={this.state.product.colors} />
                        </Form.Group>
                        </Col>
                        </Row>
                        <Row>
                            <Col>
                        <Form.Group controlId="product-price">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control size="sm" type="text" name="price" onChange={this.handleInputChange} value={this.state.product.price} />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group controlId="product-rating">
                            <Form.Label>Product Rating</Form.Label>
                            <Form.Control size="sm" as="select" name="rating" onChange={this.handleInputChange} value={this.state.product.rating} >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        </Col>
                        </Row>
                        <Form.Group controlId="product-image">
                            <Form.Label>Product Image</Form.Label>
                            <Form.Control size="sm" type="text" name="image" onChange={this.handleInputChange} value={this.state.product.image} />
                        </Form.Group>

                        <Button variant="info" type="submit" onClick={this.handleSubmit} >Edit Product</Button>
                    </Form>
                    </ListGroupItem>
                    </ListGroup> </div>
                    : null
                }
                    
                </Card>
                <div>
                    
                    {/* TO DO: FIGURE OUT HOW TO LINK TO AN INDIVIDUAL PRODUCT PAGE */}
                    {/* <Link to={`/products/${this.state.product._id}`}>{this.props.name}</Link> */}
                </div>

                
                {/* {
                    this.props.inAdminView ?
                    <div>
                    <h2>Delete</h2>
                <button onClick={this.deleteProduct}>Delete {this.props.name}</button></div> : null } */}

                
            </div>
        )
    }
}
 

