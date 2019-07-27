import React, { Component } from 'react'
import city from './images/cityBuildings.jpg'
import { Form, Button, Col } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import ContactUsModal from './ContactUsModal'

export default class ContactUs extends Component {
    state = {
        showModal: false
    }

    getInitialState() {
        return { showModal: false };
      }
    
      close =() => {
        this.setState({ showModal: false });
      }
    
      open = () => {
        this.setState({ showModal: true });
      }

    render() {
  
        return (
            <div className="contact-component">
                <img className="contact-background-image" src={city} alt="Picture of an apartment building" />
                <div className="contact-content">
                    <h1 className="contact-header">Contact Us</h1>
                    <div className="contact-paragraph">
                    <p>I never like to think that I design for a 
                        particular person. I design for the woman 
                        I wanted to be, the woman I used to be, 
                        and - to some degree - the woman I'm still a 
                        little piece of. I think the idea of mixing 
                        luxury and mass-market fashion is very modern, 
                        very now - no one wears head-to-toe designer 
                        anymore. That is the key of this collection, 
                        being yourself. Don't be into trends. Don't make 
                        fashion own you, but you decide what you are, 
                        what you want to express by the way you dress and 
                        the way to live. I always say: To be well dressed 
                        you must be well naked. Success isn't about the 
                        end result, it's about what you learn along the 
                        way. Let us know what we can learn!</p>
                    </div>
              
                        {/* TO DO: WHEN YOU CLICK THE SUBMIT BUTTON, A MESSAGE APPEARS THAT SAYS THANKS FOR REACHING OUT */}
                        <Form>
                            {/* <input placeholder="Message" />
                            <input placeholder="Email Address"/>
                            <input placeholder="Full Name" />
                            <input type="submit" value="Send" /> */}
                            <Form.Row>
                                <Form.Control className="contact-message-input" placeholder="Message" as="textarea" rows="3" />
                                <Col>
                                    <Form.Control className="contact-email-input" placeholder="Email Address" />
                                </Col>
                                <Col>
                                    <Form.Control className="contact-name-input" placeholder="Full Name" />
                                </Col>
                                <Button 
                                    className="contact-form-submit" 
                                    variant="info"
                                    onClick={this.open} >Submit</Button>
                            </Form.Row>
                        </Form>
                        <div className="contact-footer">
                        <p>123 Totally Real St.</p>
                        <p>Fashion Vera</p>
                        </div>
                     
                            <Modal show={this.state.showModal} onHide={this.close}>
                            <Modal.Header closeButton>
                                <Modal.Title>Thanks for the message!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>I love women's fashion, but women don't need me as much as men do. It's the men who have nothing to wear.</p>
                            </Modal.Body>
                            
                            </Modal>
                        
                    </div>
            </div>
        )
    }
}
