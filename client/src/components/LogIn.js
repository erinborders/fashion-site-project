import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class LogIn extends Component {
  
  state = {
    users: [], 
    newUser: {
      userName: '',
      password: ''
    },
    redirect: false,
    isLoggedIn: false
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

//   getOneUser() {
//     axios.get(`/api/users/${this.props.match.params.userId}`)
//         .then(() => {

//         })
// }

  handleChange = (e) => {
    const updatedUser = {...this.state.newUser}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({newUser: updatedUser})
  }

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
        {
            this.state.isLoggedIn ?
            // <Link to="/user-profile">Account</Link>
            null : 
            <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="userName">User Name</label>
              <input type="text" name="userName" onChange={this.handleChange} value={this.state.newUser.userName} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" onChange={this.handleChange} value={this.state.newUser.password}/>
            </div>
            <button>Create Account</button>
          </form>
        }
      </div>
    )
  }
}

