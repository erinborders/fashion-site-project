import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Products from './Products'
import SingleProduct from './SingleProduct'

export default class SingleLocation extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        this.getProducts()
    }
    
    getProducts() {
        axios.get(`/api/products`)
            .then(res => {
                this.setState({products: res.data})
            })
    }

    render() {
        
        return (
            <div>
                <Link to={`/locations/${this.props.id}`}>{this.props.neighborhood}</Link>
                
                {
                    this.props.match
                        ? <div>Fashion Vera
                            {/* TO DO: ORGANIZE THIS */}
                        {this.state.products.map(product => {
            if(product.locationId == this.props.match.params.locationId) {
                return(
                    <div>
                        <SingleProduct
                            key={product._id}
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
            }
            
        })}
                        {/* {productsList} */}
                        </div>
                        : null
                }

                
            </div>
        )
    }
}
