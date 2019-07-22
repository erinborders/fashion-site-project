import React, { Component } from 'react'

export default class Products extends Component {

    state = {
        newProduct: {
            name: '',
            price: '',
            rating: '',
            description: '',
            size: '',
            colors: ''
        }
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
        axios.get('/api/products')
            .then((res) => {
                this.setState({newProduct: res.data})
            })
    }

    render() {
        return (
            <div>
                <h1>Products</h1>
            </div>
        )
    }
}
