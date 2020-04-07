import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Logo from './assets/logo.png';
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
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    display: 'flex',
  },
  textContainer: {
    height: '100vh',
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
  },
  grid: {
    justifyContent: 'center',
    display: "flex",
    alignItems: "center",

  },
}));


export default function Skeptic() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={6} className={classes.imageContainer}>
            <img 
            src={Logo}
            className={classes.image}
            alt="logo"
            ></img>
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.textContainer}>
          <Container>
            <Typography variant="h5"> 
            I'm a product manager/designer contractor. FinTech is my favorite tech, but [almost] anything goes. 
            With experience from <a href="http://www.gimitheapp.com" target="_blank" rel="noopener noreferrer" className={classes.links}>Gimi</a>, <a className={classes.links} rel="noopener noreferrer" target="_blank" href='http://www.tink.com'>Tink</a>, <a className={classes.links} rel="noopener noreferrer" target="_blank" href='http://www.scalable.company'>Scalable</a> and <a className={classes.links} rel="noopener noreferrer" target="_blank" href='https://squidapp.co/'>Squid</a>, 
            I know how to make products come to life.
            <br></br>
            <br></br>
            When I'm not Skeptic, I'm <Link className={classes.links} to="/monika">Monika</Link>
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
