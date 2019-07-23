import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class LogIn extends Component {
  
  state = {
    user: {
      userName: '',
      password: ''
    },
    redirect: false,
    isLoggedIn: false
  }
  

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({isLoggedIn: true})
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/user-profile"/>)
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={this.handleChange} value={this.state.user.userName}/>
          </div>
          <button>Log In</button>
        </form>
      </div>
    )
  }
}

