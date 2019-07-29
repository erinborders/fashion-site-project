import React, { Component } from 'react'
import axios from 'axios'
import { Form, Button, Row, Col } from 'react-bootstrap'

export default class Products extends Component {

    state = {
        products: [],
        newProduct: {
            name: '',
            price: '',
            rating: '',
            description: '',
            size: '',
            colors: '',
            locationId: ''
        },
        isNewProductFormDisplayed: false
    }

    
    componentDidMount() {
        this.getAllProducts()
    }

    getAllProducts() {
        axios.get(`/api/products`)
            .then((res) => {
                this.setState({products: res.data})
            })
    }

    //to handle the input fields of the create product form
    handleInputChange = (event) => {
        const newProduct = {...this.state.newProduct}
        newProduct[event.target.name] = event.target.value
        newProduct.locationId = this.props.match.params.locationId

        this.setState({newProduct})
    }

    //to submit the newly created product
    handleCreateSubmit = (event) => {
        event.preventDefault()
      
        axios.post(`/api/products`, this.state.newProduct)
            .then(() => {
                this.setState({isNewProductFormDisplayed: false})
                this.getAllProducts()
            })
    }

    render() {

        return (
            <div>
            
                <h1>Create Product Form</h1>
                    <Form>
                        <Row>
                            <Col>
                        <Form.Group controlId="product-name" >
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control size="sm" type="text" name="name" onChange={this.handleInputChange} value={this.state.newProduct.name} />
                        </Form.Group>
                            </Col>
                            <Col>
                        <Form.Group controlId="product-description">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control size="sm" type="text" name="description" onChange={this.handleInputChange} value={this.state.newProduct.description} />
                        </Form.Group>
                        </Col>
                        </Row>
                        <Row>
                            <Col>
                        <Form.Group controlId="product-size">
                            <Form.Label>Product Size</Form.Label>
                            <Form.Control size="sm" name="size" onChange={this.handleInputChange} value={this.state.newProduct.size} />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group controlId="product-colors">
                            <Form.Label>Product Colors</Form.Label>
                            <Form.Control size="sm" name="colors" onChange={this.handleInputChange} value={this.state.newProduct.colors} />
                        </Form.Group>
                        </Col>
                        </Row>
                        <Row>
                            <Col>
                        <Form.Group controlId="product-price">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control size="sm" type="text" name="price" onChange={this.handleInputChange} value={this.state.newProduct.price} />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group controlId="product-rating">
                            <Form.Label>Product Rating</Form.Label>
                            <Form.Control size="sm" as="select" name="rating" onChange={this.handleInputChange} value={this.state.newProduct.rating} >
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
                            <Form.Control size="sm" type="text" name="image" onChange={this.handleInputChange} value={this.state.newProduct.image} />
                        </Form.Group>

                        <Button variant="info" type="submit" onClick={this.handleCreateSubmit} >Create Product</Button>
                    </Form>

                       
            </div>
        )
    }
}
