import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-component">
                <Link style={{color: 'white', margin: '15px'}} to="/about">About</Link>
                
                <Link style={{color: 'white'}} to="/contact">Contact Us</Link>
                
                <a className="footer-link" href="https://www.linkedin.com/in/erin-borders/">Linked In</a>
                
                <a className="footer-link" href="https://www.instagram.com/erinborders/">Instagram</a>
                
            </div>
        )
    }
}
