import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SingleProduct extends Component {
    render() {
        return (
            <div>
                {/* <Link to={`/products/${this.props.id}`} key={this.props.index}>{this.props.name}</Link> */}
                <p>Product</p>
            </div>
        )
    }
}
