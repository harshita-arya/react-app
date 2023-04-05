import React from 'react';
import UserDetails from './UserDetails';
import Details from './Details';
import Confirm from './Confirm';
import Success from './Success';

export default class Registeration extends React.Component {
  state = {
    step: 1,
    firstName: '',
    middleName:'',
    lastName: '',
    email: '',
    password: '',
    abhaAdress: '',
    adhaarNumber: '',
    adhaarOtp: '',
    mobileNumber: '',
    mobileOtp: '',



  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  }

  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  }

  handledChange = input => e => {
    this.setState({
      [input]: e.target.value,
    });
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch(step) {
      case 1:
        return (
          <Details 
            nextStep={this.nextStep}
            handleChange={this.handledChange}
            values={values}
          />
        );
      case 2:
        return (
          <UserDetails 
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handledChange}
            values={values}          
          />
        );        
      case 3:
        return (
          <Confirm 
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handledChange}
            values={values}
          />
        );        
      case 4:
        return (
          <Success />
        );                
    }
  }
}