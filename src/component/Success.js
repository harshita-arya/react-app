import React from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import styles from '../styles';
import { AppBar } from '@mui/material';

const Success = () => (
//   <MuiThemeProvider>
      <React.Fragment>
        <AppBar
          title="Success"
          style={styles.appBar}
        />  
        <h1>Thank You For Your Submission</h1>
        <p>You will get an email with further instructions</p>
    </React.Fragment>    
//   </MuiThemeProvider>
);

export default Success;