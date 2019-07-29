import React, { Component } from 'react'
import Locations from './Locations'
import LogIn from './LogIn'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

export default class NavBar extends Component {
    state = {
        isLoggedIn: false,
        newUser: {
            userName: '',
            password: ''
          },
        isLoggedIn: false
    }
    
      handleSubmit = (e) => {
        e.preventDefault()
        this.props.mockLogIn(this.state.newUser)
        this.setState({isLoggedIn: true})
        this.setState({redirect: true})
      }

      handleLogInToggle = () => {
        this.setState((state) => {
          return {isLoggedIn: !state.isLoggedIn}
      })
      }

    render() {
        return (
            <div className="navbar-wrapper" style={{display: 'flex'}} >
              <Navbar bg="light">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                  <Nav className="mr-auto">
                    <Nav.Link>
                      
                      <LogIn 
                          isLoggedIn={this.state.isLoggedIn} 
                          mockLogIn={this.props.mockLogIn}
                          setStateOfUsers={this.props.setStateOfUsers}
                          handleSubmit={this.handleSubmit}/>
                      
                    </Nav.Link>
                    <NavDropdown title="Locations">
                      <NavDropdown.Item>
                        <Locations />
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
                
            </div>
        )
    }
}
