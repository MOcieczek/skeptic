import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Placeholder from '../../assets/placeholder.png';
import Logo from '../../assets/logo.jpg';


const useStyles = makeStyles((theme) => ({


  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '0%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div>
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
        </div>
        {/* End hero unit */}

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}/>
                  <img 
                  src={Placeholder}
                  title="Gimi" 
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Gimi
                    </Typography>
                    <Typography>
                      CPO and Co-Founder
                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}/>
                  <img 
                  src={Placeholder}
                  title="Tink" 
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Tink
                    </Typography>
                    <Typography>
                      Product Manager and Product team lead
                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}/>
                  <img 
                  src={Placeholder}
                  title="Scalable" 
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Scalable.ai
                    </Typography>
                    <Typography>
                      Product strategy and definition
                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}/>
                  <img 
                  src={Placeholder}
                  title="Gimi" 
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}/>
                  <img 
                  src={Placeholder}
                  title="Gimi" 
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Get in touch soon!
        </Typography>
      </footer>
      {/* End footer */}

    </React.Fragment>
  );
}