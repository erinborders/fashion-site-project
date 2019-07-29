import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import city from './images/cityBuildings.jpg'
import { Breadcrumb, Button } from 'react-bootstrap'
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
                        ? <React.Fragment>
                            
                            <Breadcrumb className="nav-breadcrumbs">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Shopping</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="single-location-component">
                            <div className="single-location-content">
                                <img className="single-location-background-image" src={city} alt="picture of apartment building" />
                            <h1 className="single-location-header">Fashion Vera</h1>
                            {
                                this.state.inAdminView ?
                                <Button variant="danger" onClick={this.deleteLocation}>Delete Location</Button> 
                                : null
                            }
                            
                            <Button variant="info" onClick={this.showAdminView}>Admin View</Button>
                            </div>
                            <div>
                            {
                                this.state.inAdminView ?
                                <AdminView 
                                match={this.props.match}
                                onLocationPage={this.state.onLocationPage} /> : null
                            }
                            
                        </div>
                            
                            
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
                                            locationId={product.locationId}
                                            inAdminView={this.state.inAdminView} />
                                    </div>
                                )
                            }
                            
                        })}
                       
                        </div>
                    </React.Fragment>
                        : null
                }
                
                
            </div>
        )
    }
}
