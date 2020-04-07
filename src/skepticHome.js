import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Logo from './assets/logo.png';

const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundSize: "cover",
    height: '100vh',
    flexGrow: '1', 
    justifyContent: "center",
    alignItems: "center",
    },

  container: {
    backgroundColor: "#000000",
    height: '100vh',
    justifyContent: "center",
    alignItems: "center",
  },
  links: {
    variant: "h5",
    color: "#FFD700",
    textDecoration: 'none',
  },
  image: {
    maxHeight: '20vh',
  },
  body2: {
    variant: "body2",
    textDecoration: 'none',
  },
  grid: {
    justifyContent: 'center',
    display: "flex",

  },
}));


export default function Skeptic() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={6} className={classes.container}>
            <img 
            src={Logo}
            className={classes.image}
            alt="logo"
            ></img>
      </Grid>
      <Grid item xs={12} sm={12} md={6} >
          <Container color="#ffffff">
            <Typography variant="h5" align="center" color="#ffffff" paragraph> 
            I'm a product manager/designer contractor. FinTech is my favorite tech, but [almost] anything goes. 
            With experience from <a href="http://www.gimitheapp.com" target="_blank" rel="noopener noreferrer" className={classes.links}>Gimi</a>, <a className={classes.links} rel="noopener noreferrer" target="_blank" href='http://www.tink.com'>Tink</a>, <a className={classes.links} rel="noopener noreferrer" target="_blank" href='http://www.scalable.company'>Scalable</a> and <a className={classes.links} rel="noopener noreferrer" target="_blank" href='https://squidapp.co/'>Squid</a>, 
            I know how to make products come to life.
            <br></br>
            <br></br>
            When I'm not Skeptic, I'm <Link className={classes.links} to="/monika">Monika</Link>
            </Typography> 
            <br></br>
            <br></br>
            <Typography className={classes.body2} align="center" paragraph>
            <span role="img" aria-label="star">✨</span> <a className={classes.links} href="mailto:monika.ocieczek@gmail.com">
               Get in touch!
              </a> 
              <br></br>
              <br></br>
            </Typography>  
          </Container>
      </Grid>
    </Grid>
    
  );
}
