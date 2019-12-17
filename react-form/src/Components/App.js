import React, {Component} from 'react';
import Form from './Form'

export default class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: ''
  }
  //gets values written in form
  getFormValues = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    }, ()=> console.log(this.state))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <Form 
      handleForm={this.getFormValues}
      handleSubmit={this.handleSubmit}/>
    );
  }
}
