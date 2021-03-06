import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'

export default class LogIn extends Component {
  state = {
    users: [], 
    newUser: {
      userName: '',
      password: ''
    },
    redirect: false,
    isLoggedIn: false,
    showLogInModal: false
  }
  
  componentDidMount() {
      this.getAllUsers()
  }

  getAllUsers() {
      axios.get('/api/users')
        .then(res => {
            this.setState({users: res.data})
        })
  }

  //to open create account modal
  getInitialState() {
    return { showLogInModal: false };
  }

  close =() => {
    this.setState({ showLogInModal: false });
  }

  open = () => {
    this.setState({ showLogInModal: true });
  }

  //handle change in create account modal
  handleChange = (e) => {
    const updatedUser = {...this.state.newUser}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({newUser: updatedUser})
  }

  //handle submit for create account modal
  handleSubmit = (e) => {
    e.preventDefault()

    axios.post(`/api/users`, this.state.newUser)
        .then(() => {
            this.props.mockLogIn(this.state.newUser)
            this.setState({isLoggedIn: true})
            this.setState({redirect: true})
            this.getAllUsers()
            this.props.setStateOfUsers(this.state.users)
        })
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to={`/`}/>)
    }

    return (
      <div>
        {/* button in the navbar that opens the log in modal */}
        <Button size="sm" variant="light" onClick={this.open}>Log In</Button>

        <Modal show={this.state.showLogInModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Looks like you don't have an account yet.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Go ahead and create one!</p>
            <Form>
              <Form.Group controlId="userName">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" name="userName" onChange={this.handleChange} placeholder="Enter username"/>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" onChange={this.handleChange} placeholder="Enter password" />
              </Form.Group>

              <Button variant="outline-info" type="submit" onClick={this.handleSubmit}>Create Account</Button>
            </Form>
          </Modal.Body>
        </Modal>
        
      </div>
    )
  }
}

