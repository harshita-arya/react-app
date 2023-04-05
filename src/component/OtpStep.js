import React from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
import {  Button, Stack, TextField, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';

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
            <Typography
              style={{
                fontSize: "32px",
                fontWeight: "700",
                lineHeight: "38px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              LogIn For Account

            </Typography>

                
<Stack
          direction="row"
          spacing={1}

          alignItems="center"
        >
                      <TextField  label="Enter OTP" variant="outlined"    value={values.mobileOtp} fullWidth required
                    onChange={(e) => {
                      handleChange('mobileOtp');
                    }} />
              

                    </Stack>               <Button  variant="contained" onClick={this.continue}>
              Submit

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
