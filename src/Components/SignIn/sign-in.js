import React, { Component } from 'react';
import FormInput from '../FormInput/form-input'
import './sign-in.scss'
export default class SignIn extends Component {
  constructor(){
    super()
      this.state= {
        email: "",
        password:''
      }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: ''})
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value})

  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
        <FormInput
         name="email"
         type="email"
         value={this.state.email}
         handleChange={this.handleChange}
         label="email"
         required />
        <FormInput
         name="email"
         type='password'
         value={this.state.email }
         handleChange={this.handleChange}
         label="password"
         required />
        <input type="submit" value="Submit Form"/>
        </form>
      </div>

    )
  }
}
