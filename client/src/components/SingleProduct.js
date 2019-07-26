import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
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
                
                {/* TO DO: PUT IMAGES INTO TEST DATA FOR HEROKU SO I CAN HAVE A CAROUSEL */}
                
                <Card>
                    {/* if there's an image, show it */}
                    {
                        this.state.product.image ?
                        <div>
                        <Card.Img variant="top" src={this.state.product.image} alt={`A picture of ${this.props.name}`} />
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
                </Card>
                <div>
                    
                    {/* TO DO: FIGURE OUT HOW TO LINK TO AN INDIVIDUAL PRODUCT PAGE */}
                    {/* <Link to={`/products/${this.state.product._id}`}>{this.props.name}</Link> */}
                </div>

                {/* TO DO: CHANGE THIS HEADER */}
                {/* TO DO: CHANGE DELETE FUNCTION SO IT ACTUALLY REFRESHES THE PAGE */}
                {
                    this.props.inAdminView ?
                    <div>
                    <h2>Delete</h2>
                <button onClick={this.deleteProduct}>Delete {this.props.name}</button>

                <h2>Edit form</h2>
                <form onSubmit={this.handleSubmit}>
                            <label htmlFor="product-name" >Product Name:</label>
                            <input 
                                id="product-name" 
                                name="name" 
                                type="text" 
                                onChange={this.handleInputChange} 
                                value={this.state.product.name} />

                            <label htmlFor="product-description" >Product Description:</label>
                            <input 
                                id="product-description" 
                                name="description" 
                                type="text" 
                                onChange={this.handleInputChange} 
                                value={this.state.product.description}/>

                            <label htmlFor="product-size" >Product Size:</label>
                            <input 
                                id="product-size" 
                                name="size" 
                                type="text" 
                                onChange={this.handleInputChange} 
                                value={this.state.product.size}/>
                                
                            <label htmlFor="product-colors" >Product Colors:</label>
                            <input 
                                id="product-colors" 
                                name="colors" 
                                type="text" 
                                onChange={this.handleInputChange} 
                                value={this.state.product.colors}/>

                            <label htmlFor="product-price" >Product Price:</label>
                            <input 
                                id="product-price" 
                                name="price" 
                                type="text" 
                                onChange={this.handleInputChange} 
                                value={this.state.product.price}/>

                            <label htmlFor="product-rating" >Product Rating:</label>
                            <input 
                                id="product-rating" 
                                name="rating" 
                                type="text" 
                                onChange={this.handleInputChange} 
                                value={this.state.product.rating}/>

                            <label htmlFor="product-image">Product Image</label>
                            <input
                                id="product-image"
                                name="image"
                                type="text"
                                onChange={this.handleInputChange}
                                value={this.state.product.image} />

                            <input type="submit" value="Edit Product" />
                        </form> </div>: null
                }
            </div>
        )
    }
}
