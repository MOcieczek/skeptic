import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Monkan from './assets/monkan.png';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/CallMade';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundSize: "cover",
    flexGrow: '1', 
    justifyContent: "center",
    alignItems: "center",
    },

  imageContainer: {
    height: '100vh',
    justifyContent: "center",
    alignItems: "center",
    display: 'flex',
  },
  textContainer: {
    height: '100vh',
    backgroundColor: "rgb(102,255,255,0.5)",
    padding: "8%",
    justifyContent: "center",
    alignItems: "center",
    display: 'flex',
  },
  links: {
    variant: "h5",
    color: "blue",
    textDecoration: 'none',
  },
  image: {
    maxHeight: '20vh',
    maxWidth: '80%',
  },
  grid: {
    justifyContent: 'center',
    display: "flex",
    alignItems: "center",
  },
}));


export default function SkepticMonika() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={6} className={classes.imageContainer}>
            <img 
            src={Monkan}
            className={classes.image}
            alt="logo"
            ></img>
            </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.textContainer}>
          <Container>
            <Typography variant="h5">
            Hi, I'm Monika! <span role="img" aria-label="girl">👋</span>
            <br></br>
            <br></br>
            I draw, code [React beginner], run, eat and sleep. I like reading sci-fi, spending time outdoors and alpacas. My fails: singing, French and growing mushrooms at home. <span role="img" aria-label="poland">🇵🇱</span> <span role="img" aria-label="sweden">🇸🇪</span> <span role="img" aria-label="pirate">🏴‍☠️</span>
            </Typography>
            <br></br>
            <Typography variant="h5">
              I'm also <Link className={classes.links} to="/">Skeptic</Link>
            </Typography>
            <br></br>
            <br></br>
            <Button className={classes.button} variant="outlined" href="mailto:monika.ocieczek@gmail.com" endIcon={<SendIcon/>}>
              Get in touch! 
              </Button>  
          </Container>
      </Grid>
    </Grid>
      
  );
}