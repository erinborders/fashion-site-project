import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Link to="/about">About</Link>
                |
                <Link to="/contact">Contact Us</Link>
                |
                <a href="https://www.linkedin.com/in/erin-borders/">Linked In</a>
                |
                <a href="https://www.instagram.com/erinborders/">Instagram</a>
                
            </div>
        )
    }
}
