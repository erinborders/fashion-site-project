import React, { Component } from 'react'
import Locations from './Locations'
import LogIn from './LogIn'
import { Button, Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
              <Navbar>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                  <Nav className="mr-auto">
                    <Nav.Link>
                      {/* TO DO: DELETE IS LOGGED IN */}
                    {/* {
                      this.state.isLoggedIn ? */}
                      <LogIn 
                          isLoggedIn={this.state.isLoggedIn} 
                          mockLogIn={this.props.mockLogIn}
                          setStateOfUsers={this.props.setStateOfUsers}
                          handleSubmit={this.handleSubmit}/>
                      {/* // : <Button className="navbar-button" variant="outline-light" onClick={this.handleLogInToggle}>Log In</Button> */}
                      
                    {/* // } */}
                    </Nav.Link>
                    <NavDropdown title="Locations">
                      <NavDropdown.Item>
                        <Locations />
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
                {/* <a href="#">Search</a> */}
                
                {/* <Link to="">Account</Link> */}
                
                
            </div>
        )
    }
}
