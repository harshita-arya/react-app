import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


import {  Button, Grid, Stack, TextField } from '@mui/material';



export default class Details extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleChange } = this.props;

    return (
    //   <MuiThemeProvider>
        <React.Fragment>
 
          {/* <div style={styles.form}> */}
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
            <Stack my={4} direction="column" spacing={2}>


      <Stack
          direction="row"
          spacing={1}

          alignItems="center"
        >
                  <TextField fullWidth required label="Adhaar Number" variant="outlined"    value={values.adhaarNumber}
                    onChange={(e) => {
                      handleChange('adhaarNumber');
                    }} />
                    <Button variant='text' sx={{textTransform:"none"}} >
                      Submit
                    </Button>
            </Stack>
        

            <Stack
          direction="row"
          spacing={1}

          alignItems="center"
        >
            <TextField fullWidth required label="Enter OTP" variant="outlined"    value={values.adhaarOtp}
                    onChange={(e) => {
                      handleChange('adhaarOtp');
                    }} />
                      <Button variant='text' sx={{textTransform:"none"}} >
                      Verify
                    </Button>

                    </Stack>
            <Stack
          direction="row"
          spacing={1}

          alignItems="center"
        >
           <TextField  label="Mobile Number" variant="outlined"  fullWidth required  value={values.mobileNumber}
                    onChange={(e) => {
                      handleChange('mobileNumber');
                    }} />
                        <Button variant='text' sx={{textTransform:"none"}} >
                      Submit
                    </Button>

                    </Stack>
                    <Stack
          direction="row"
          spacing={1}

          alignItems="center"
        >
                      <TextField  label="Enter OTP" variant="outlined"    value={values.mobileOtp} fullWidth required
                    onChange={(e) => {
                      handleChange('mobileOtp');
                    }} />
                           <Button variant='text' sx={{textTransform:"none"}} >
                      Verify
                    </Button>

                    </Stack>
            <Button  variant="contained" onClick={this.continue} >
              Continue

            </Button>
            </Stack>
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
    )
  }
}
