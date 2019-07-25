import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Products from './Products'
import CreateProductForm from './CreateProductForm'
import { Redirect } from 'react-router-dom'
import SingleProduct from './SingleProduct'
import AdminView from './AdminView'

export default class SingleLocation extends Component {
    state = {
        products: [],
        redirect: false,
        inAdminView: false,
        onLocationPage: true
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

    deleteLocation = (e) => {
        e.preventDefault()
        
        axios.delete(`/api/locations/${this.props.match.params.locationId}`)
            .then(() => {
                this.setState({redirect: true})
            })
    }

    showAdminView = () => {
        this.setState((state) => {
            return {inAdminView: !state.inAdminView}
        })
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={`/`}/>)
          }
        
        return (
            <div>
                <Link to={`/locations/${this.props.id}`}>{this.props.neighborhood}</Link>
                
                {
                    this.props.match
                        ? <div>Fashion Vera
                            <button onClick={this.deleteLocation}>Delete Location</button>
                            <button onClick={this.showAdminView}>Admin View</button>
                            {/* <CreateProductForm match={this.props.match} /> */}
                            {
                                this.state.inAdminView ?
                                <AdminView 
                                match={this.props.match}
                                onLocationPage={this.state.onLocationPage} /> : null
                            }
                            

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
                        </div>
                        : null
                }
                {/* <Products /> */}
                
            </div>
        )
    }
}
