import React from 'react';
import FirstStep from './FirstStep';
import OtpStep from './OtpStep';
import Confirm from './Confirm';
import Success from './Success';

export default class Registeration extends React.Component {
  state = {
    step: 1,
    healthId: '',
    password: '',
    adhaarOtp: '',
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
    const { healthId, mobileOtp, adhaarOtp, password } = this.state;
    const values = { healthId, mobileOtp, adhaarOtp, password};

    switch(step) {
      case 1:
        return (
          <FirstStep
            nextStep={this.nextStep}
            handleChange={this.handledChange}
            values={values}
          />
        );
      case 2:
        return (
          <OtpStep
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