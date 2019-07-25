import React, { Component } from 'react'
import Locations from './Locations'
import Posing from './images/posing.gif'
import BlackGirlsDancing from './images/black girls dancing.gif'
import Walking from './images/walking.gif'
import SquadMagic from './images/squad magic.gif'
import PrimpingHair from './images/primping hair.gif'
import Carousel from 'react-bootstrap/Carousel'
import Products from './Products'

export default class Home extends Component {
    
    render() {
        return (
            <div>
                <div>
                    <Carousel interval="2000" fade="true" indicators="false">
                        <Carousel.Item >
                            <img 
                            src={Posing} 
                            height="500px" 
                            width="950px"
                            // style={{objectFit: "contain"}}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            src={BlackGirlsDancing} 
                            height="500px" 
                            width="950px"
                            // style={{objectFit: "contain"}}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            src={Walking} 
                            height="500px" 
                            width="950px"
                            // style={{objectFit: "contain"}}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            src={SquadMagic} 
                            height="500px" 
                            width="950px"
                            // style={{objectFit: "contain"}}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            src={PrimpingHair} 
                            height="500px" 
                            width="950px"
                            // style={{objectFit: "contain"}}
                            />
                        </Carousel.Item>
                    </Carousel>
                    <span><h1>Fashion Vera</h1></span>
                </div>
                
                <Products />
            </div>
        )
    }
}
