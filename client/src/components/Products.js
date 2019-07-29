import React, { Component } from 'react'
import SingleProduct from './SingleProduct'

export default class Products extends Component {

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
                
                    <div>
                        {productsList}
                    </div> 
        
            </div>
        )
    }
}
