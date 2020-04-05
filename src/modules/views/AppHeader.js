import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Logo from '../../assets/logo.jpg';


const useStyles = makeStyles((theme) => ({


  container: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(8),
  },
  link: {
    variant: "h5",
    color: "blue",
  },

}));


export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container maxWidth="sm" align="center" justifyContent="center" paddingTop="20" className={classes.container}>
            <img 
            src={Logo}
            width='400'
            alt="logo"
            ></img>
            <Typography variant="h5" align="center" color="textPrimary" paragraph>
            Hi, I'm Monika! 
            <br></br>
            I work as a product owner/manager/designer, mostly, but not exclusively, with fintech. With experience from <Link className={classes.link} target="_blank" to='http://www.gimitheapp.com'>Gimi</Link>, <Link className={classes.link} target="_blank" to='http://www.tink.com'>Tink</Link>, <Link className={classes.link} target="_blank" to='http://www.scalable.company'>Scalable</Link>, 
              , I know how to make great products come to life. 
            </Typography>
            <br></br>
            <Typography fontSize="6" color="textSecondary">
              monika.ocieczek@gmail.com
            </Typography>
          </Container>
      </main>
    </React.Fragment>
  );
}