import React, {Component} from 'react';

import FormInput from '../../Components/FormInput/form-input'
import CustomButton from '../../Components/CustomButton/custom-button'
import './contact.scss'


  export default class ContactPage extends Component {
  constructor() {
    super ();
    this.state = {
      displayName: '',
      email: '',

    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    this.setState({
      displayName: "",
      email: ""
    })
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }

  render() {
    const { displayName, email } = this.state;
    return (
      <div className='email-me'>
        <h2 className='title'>Send me an email</h2>
          <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Name'
            required
            />
            <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
            />
            <CustomButton type='submit'>Send</CustomButton>
          </form>
          <img src="https://media1.tenor.com/images/302ee4ff4601668de404cf7aae60ffd7/tenor.gif?itemid=14560309" alt="gif"/>
      </div>
    )
  }
}
