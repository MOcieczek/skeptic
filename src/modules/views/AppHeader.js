import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Logo from '../../assets/logo.jpg';


const useStyles = makeStyles((theme) => ({


  container: {
    paddingTop: theme.spacing(20),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    maxWidth: "sm",
  },
  link: {
    variant: "h5",
    color: "blue",
  },
  image: {
    maxWidth: "70%",
    minWidth: "50%",
    paddingBottom: theme.spacing(5),
  },
  body2: {
    color: "rgb(0,0,0,0.4)"
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
            Hi, I'm Monika! <span role="img" aria-label="girl">👋</span>
            <br></br>
            I'm a product owner/manager/designer contractor. Fin-tech is my favorite tech, but [almost] anything goes. 
            With experience from <Link className={classes.link} target="_blank" to='http://www.gimitheapp.com'>Gimi</Link>, <Link className={classes.link} target="_blank" to='http://www.tink.com'>Tink</Link>, <Link className={classes.link} target="_blank" to='http://www.scalable.company'>Scalable</Link> and <Link className={classes.link} target="_blank" to='https://squidapp.co/'>Squid</Link>, 
            I know how to make products come to life. 
            </Typography>
            <br></br>
            <Typography variant="body2" className={classes.body2}>
              monika.ocieczek@gmail.com
            </Typography>
          </Container>
      
  );
}