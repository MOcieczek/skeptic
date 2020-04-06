import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Logo from './assets/logo.jpg';
  

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
    maxWidth: "70%",
    minWidth: "50%",
    paddingBottom: theme.spacing(5),
  },
  body2: {
    color: "rgb(0,0,0,0.4)",
    textDecoration: 'none',
  },
}));


export default function AppHeader() {
  const classes = useStyles();

  return (
        <Container maxWidth="sm" className={classes.container}>
            <img 
            src={Logo}
            className={classes.image}
            alt="logo"
            ></img>
            <Typography variant="h5" align="center" color="textPrimary" paragraph>
            This is Skeptic <span role="img" aria-label="hi">🙌</span>
            <br></br>
            <br></br>
            I'm a product owner/manager/designer contractor. Fin-tech is my favorite tech, but [almost] anything goes. 
            With experience from <a href="http://www.gimitheapp.com" target="_blank" className={classes.links}>Gimi</a>, <a className={classes.links} target="_blank" href='http://www.tink.com'>Tink</a>, <a className={classes.links} target="_blank" href='http://www.scalable.company'>Scalable</a> and <a className={classes.links} target="_blank" href='https://squidapp.co/'>Squid</a>, 
            I know how to make products come to life.
            </Typography>
            <br></br>
            <div>
            <Typography variant="h5" align="center" color="textPrimary" paragraph>
              When I'm not Skeptic, I'm <Link className={classes.links} to="/monika">Monika</Link>
            </Typography>
            </div>
            <br></br>
            <div>
            <Typography variant="body2" className={classes.body2} align="center" paragraph>
            <span role="img" aria-label="star">✨</span> <a className={classes.link} href="mailto:monika.ocieczek@gmail.com">
               Get in touch!
              </a> 
            </Typography>  
            </div>
          </Container>
      
  );
}