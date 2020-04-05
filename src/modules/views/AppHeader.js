import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from '../../assets/logo.jpg';


const useStyles = makeStyles((theme) => ({


  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },


}));


export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container maxWidth="sm" align="center" paddingTop='20'>
            <img 
            src={Logo}
            width='400'
            alt="logo"
            ></img>
            <Typography variant="h5" align="center" color="textPrimary" paragraph>
              Fintech enthusiast and product freelancer
            </Typography>
          </Container>
      </main>
    </React.Fragment>
  );
}