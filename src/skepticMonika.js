import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Monkan from './assets/monkan.png';
  

const useStyles = makeStyles((theme) => ({


  container: {
    paddingTop: theme.spacing(10),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    maxWidth: "sm",
  },
  links: {
    variant: "h5",
    color: "blue",
    textDecoration: 'none',
  },
  image: {
    maxWidth: "80%",
    minWidth: "50%",
    paddingBottom: theme.spacing(5),
  },
  body2: {
    color: "rgb(0,0,0,0.4)",
    textDecoration: 'none',
  },
}));


export default function SkepticMonika() {
  const classes = useStyles();

  return (
        <Container maxWidth="sm" className={classes.container}>
            <img 
            src={Monkan}
            className={classes.image}
            alt="logo"
            ></img>
            <Typography variant="h5" align="center" color="textPrimary" paragraph>
            Hi, I'm Monika! <span role="img" aria-label="girl">👋</span>
            <br></br>
            <br></br>
            I draw, code [React beginner], run, eat and sleep. I like reading sci-fi, spending time outdoors and alpacas. My fails: singing, French and growing mushrooms at home. <span role="img" aria-label="poland">🇵🇱</span> <span role="img" aria-label="sweden">🇸🇪</span> <span role="img" aria-label="pirate">🏴‍☠️</span>
            </Typography>
            <div>
            <Typography variant="h5" align="center" color="textPrimary" paragraph>
              I'm also <Link className={classes.links} to="/">Skeptic</Link>
            </Typography>
            </div>
            <br></br>
            <div>
            <Typography variant="body2" className={classes.body2} align="center" paragraph>
            <span role="img" aria-label="star">✨</span> <a className={classes.links} href="mailto:monika.ocieczek@gmail.com">
               Get in touch!
              </a> 
            </Typography>  
            </div>
          </Container>
      
  );
}