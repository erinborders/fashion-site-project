import React, { Component } from 'react'
import Locations from './Locations'
import Posing from './images/posing.gif'
import BlackGirlsDancing from './images/black girls dancing.gif'
import Walking from './images/walking.gif'
import SquadMagic from './images/squad magic.gif'
import PrimpingHair from './images/primping hair.gif'
import TealOutfits from './images/teal outfits.jpg'
import Carousel from 'react-bootstrap/Carousel'
import AdminView from './AdminView'
import Products from './Products'

export default class Home extends Component {
    state = {
        inAdminView: false
    }
    
    showAdminView = () => {
        this.setState((state) => {
            return {inAdminView: !state.inAdminView}
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.showAdminView}>Admin View</button>
                {
                    this.state.inAdminView ?
                    <div>
                    <AdminView />
                </div> : null
                }
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
                <div>
                    <img
                        src={TealOutfits}
                        height="500px" 
                        width="950px"
                        style={{objectFit: "contain"}}
                        />
                </div>
                <h1>Products</h1>
                <Products />
            </div>
        )
    }
}
