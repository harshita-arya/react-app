import React from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
import styles from '../styles';
import { AppBar, Button, Stack, TextField, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default class UserDetails extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.previousStep();    
  }

  render() {
    const { values, handleChange } = this.props;

    return (
    //   <MuiThemeProvider>
        <React.Fragment>
                  <Grid
      container
      style={{
        height: "100vh",
      }}
    >
      <Grid item xs={12} lg={5}>
      <Box
          px={2}
          style={{
            height: "100vh",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >


     
             <Stack
            direction="column"
            spacing={4}
            py={5}
            style={{
              width: "100%",
              maxWidth: "400px",
            }}
          >

                
<TextField  fullWidth  label="First Name" variant="outlined"    value={values.firstName}
                    onChange={(e) => {
                      handleChange('firstName');
                    }} />
          <TextField required fullWidth  label="Middle Name" variant="outlined"    value={values.middleName}
                    onChange={(e) => {
                      handleChange('middleName');
                    }} />
            <TextField  fullWidth label="Last Name" variant="outlined"    value={values.lastName}
                    onChange={(e) => {
                      handleChange('lastName');
                    }} />

            <Stack
          direction="row"
          spacing={3}

          alignItems="center"
        >              
          <TextField fullWidth  label="Email" variant="outlined" required   value={values.email}
                    onChange={(e) => {
                      handleChange('email');
                    }} />
          <TextField     fullWidth 
  label="Password" variant="outlined"    value={values.password}
                    onChange={(e) => {
                      handleChange('password');
                    }} />
      
            </Stack>
            <TextField     fullWidth 
  label="Abha Adress" variant="outlined"    value={values.abhaAdress}
                    onChange={(e) => {
                      handleChange('abhaAdress');
                    }} />
          
        
               <Button  variant="contained" onClick={this.back} >
              Back

            </Button>
            </Stack>
            </Box>
            </Grid>
            <Grid
        item
        xs={12}
        lg={7}
        style={{
          backgroundColor: "#0B3A73",
          height: "100%",
          width: "100%",
        }}
      >
        {/* <Typography>
          Hello
        </Typography> */}
        </Grid>
            </Grid>
        </React.Fragment>
    //   </MuiThemeProvider>
    )
  }
}
