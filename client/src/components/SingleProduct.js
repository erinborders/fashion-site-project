import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class SingleProduct extends Component {
    state = {
        product: {}
    }

    componentDidMount() {
        axios.get(`/api/products/${this.props.id}`)
            .then(res => {
                this.setState({product: res.data})
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

    render() {
        return (
            <div>
                {/* <Link to={`/products/${this.props.id}`} key={this.props.index}>{this.props.name}</Link> */}
                
                <div>{this.props.name}</div>

                {/* TO DO: CHANGE THIS HEADER */}
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

                            <input type="submit" value="Edit Product" />
                        </form> 
            </div>
        )
    }
}
