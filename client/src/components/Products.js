import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SingleProduct from './SingleProduct'

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

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */
    componentDidMount() {
        this.getAllProducts()
    }

    getAllProducts() {
        axios.get(`/api/products`)
            .then((res) => {
                // console.log(res.data)
                this.setState({products: res.data})
            })
    }

    handleInputChange = (event) => {
        const newProduct = {...this.state.newProduct}
        newProduct[event.target.name] = event.target.value
        newProduct.locationId = this.props.match.params.locationId

        this.setState({newProduct})
    }

    handleCreateSubmit = (event) => {
        event.preventDefault()
      
        axios.post(`/api/products`, this.state.newProduct)
            .then(() => {
                this.setState({isNewProductFormDisplayed: false})
                this.getAllProducts()
            })
    }

    handleCreateToggleButton = () => {
        this.setState((state) => {
            return {isNewProductFormDisplayed: !state.isNewProductFormDisplayed}
        })
    }

    render() {

        let productsList = this.state.products.map((product, index) => {
            return(
                <div>
                    <SingleProduct
                        key={index}
                        id={product._id}
                        name={product.name}
                        price={product.price}
                        rating={product.rating}
                        description={product.description}
                        size={product.size}
                        colors={product.colors}
                        locationId={product.locationId} />
                </div>
            )
        })
        return (
            <div>
                {/* { */}
                        {/* this.state.isNewProductFormDisplayed ? */}
                        <form onSubmit={this.handleCreateSubmit}>
                            <label htmlFor="product-name" >Product Name:</label>
                            <input 
                                id="product-name" 
                                name="name" 
                                type="text" 
                                onChange={this.handleInputChange} 
                                value={this.state.newProduct.name} />

                            <label htmlFor="product-description" >Product Description:</label>
                            <input 
                                id="product-description" 
                                name="description" 
                                type="text" 
                                onChange={this.handleInputChange} 
                                value={this.state.newProduct.description}/>

                            <label htmlFor="product-size" >Product Size:</label>
                            <input 
                                id="product-size" 
                                name="size" 
                                type="text" 
                                onChange={this.handleInputChange} 
                                value={this.state.newProduct.size}/>
                                
                            <label htmlFor="product-colors" >Product Colors:</label>
                            <input 
                                id="product-colors" 
                                name="colors" 
                                type="text" 
                                onChange={this.handleInputChange} 
                                value={this.state.newProduct.colors}/>

                            <label htmlFor="product-price" >Product Price:</label>
                            <input 
                                id="product-price" 
                                name="price" 
                                type="text" 
                                onChange={this.handleInputChange} 
                                value={this.state.newProduct.price}/>

                            <label htmlFor="product-rating" >Product Rating:</label>
                            <input 
                                id="product-rating" 
                                name="rating" 
                                type="text" 
                                onChange={this.handleInputChange} 
                                value={this.state.newProduct.rating}/>

                            <input type="submit" value="Create Product" />
                        </form> 
                        {/* // :  */}
                        <div>
                        {productsList}
                        </div> 

                    {/* // } */}
            </div>
        )
    }
}
