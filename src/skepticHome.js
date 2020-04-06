import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Logo from './assets/logo.png';

const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: "rgb(0,0,0)",
    backgroundSize: "cover",
    bottom: 0,
    },

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
    color: "#ffffff",
  },
  links: {
    variant: "h5",
    color: "#FFD700",
    textDecoration: 'none',
  },
  image: {
    maxWidth: "70%",
    minWidth: "50%",
    paddingBottom: theme.spacing(5),
  },
  body2: {
    variant: "body2",
    textDecoration: 'none',
  },
}));


export default function Skeptic() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
        <Container maxWidth="sm" className={classes.container}>
            <img 
            src={Logo}
            className={classes.image}
            alt="logo"
            ></img>
            <Typography variant="h5" align="center" color="#ffffff" paragraph>
            This is Skeptic <span role="img" aria-label="hi">🙌</span>
            <br></br>
            <br></br>
            I'm a product owner/manager/designer contractor. Fin-tech is my favorite tech, but [almost] anything goes. 
            With experience from <a href="http://www.gimitheapp.com" target="_blank" rel="noopener noreferrer" className={classes.links}>Gimi</a>, <a className={classes.links} rel="noopener noreferrer" target="_blank" href='http://www.tink.com'>Tink</a>, <a className={classes.links} rel="noopener noreferrer" target="_blank" href='http://www.scalable.company'>Scalable</a> and <a className={classes.links} rel="noopener noreferrer" target="_blank" href='https://squidapp.co/'>Squid</a>, 
            I know how to make products come to life.
            </Typography>
            <br></br>
            <div>
            <Typography variant="h5" align="center" paragraph>
              When I'm not Skeptic, I'm <Link className={classes.links} to="/monika">Monika</Link>
            </Typography>
            </div>
            <br></br>
            <div>
            <Typography className={classes.body2} align="center" paragraph>
            <span role="img" aria-label="star">✨</span> <a className={classes.links} href="mailto:monika.ocieczek@gmail.com">
               Get in touch!
              </a> 
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </Typography>  
            </div>
          </Container>

      </section>
  );
}
