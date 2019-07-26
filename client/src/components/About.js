import React, { Component } from 'react'
import city from './images/cityBuildings.jpg'

export default class About extends Component {
    render() {
        return (
            <div className="about-component" >
                <img className="about-background-image" src={city} alt="Picture of an apartment building"/>
                <div className="about-content">
                <h1>About Us</h1>
                <div className="about-paragraph">
                <p>We must never confuse elegance with snobbery. 
                    Beauty is perfect in its imperfections, so you just 
                    have to go with the imperfections. I believe in 
                    comfort. If you don't feel comfortable in your 
                    clothes, it's hard to think of anything else. I 
                    design from instinct. It's the only way I know how 
                    to live. What feels good. What feels right. What is 
                    needed. Give me a problem and I will approach it 
                    creatively, from my gut. What you wear is how you 
                    present yourself to the world, especially today when 
                    human contacts go so fast. Fashion is instant language.</p>
                </div>
                </div>
                
            </div>
        )
    }
}
