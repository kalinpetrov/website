import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import linkedin from '../images/linkedin.png';
import git from '../images/github.png';
import gmail from '../images/gmail.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1
  },
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    minHeight: '90vh',
  },
  card: {
    width: 500,
    height: 250,
    paddingBottom: 10
  },
  media: {
    height: 100,
  },
  gridItem: {
    padding: 20,
  },
  header: {
    height: 'auto',
    maxWidth: 600,
    backgroundColor: '#ffffff'
  },
  button : {
    justifyContent: 'center',
    width: 200,
    height: 'auto',
  }
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontSize: 18,
    },
    h1: {
      color: "#25274D",
      fontFamily: "Segoe UI",
    },
    h5: {
      fontSize: 30,
    }
  },
});

const contact1 = {
  title: "LinkedIn",
  link: "https://www.linkedin.com/in/kalin-petrov-14a693197/",
}

const contact2 = {
  title: "GitHub",
  link: "https://github.com/kalinpetrov",
}

export default function Contact() {
  const classes = useStyles();

  const contactCard = (contact, image) => {

    return (
      <Grid item xs={12} align='center' className={classes.gridItem}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={image}
          />
          <CardContent>
            <Typography variant='h4'>{contact.title}</Typography>
          </CardContent>
          <CardActions className={classes.button}>
            <Button href={contact.link} variant="contained" color="primary"> {contact.title} </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };

  return (
    <div id='contact' style={{backgroundColor: '#464866',}}>
      <Grid container justify='center' align='center' className={classes.container}>
      <Grid item xs={12} align='center' className={classes.gridItem}>
          <CardContent className={classes.header}>
            <ThemeProvider theme={theme}>
              <Typography variant='h1' align='center'>
                Contact
              </Typography>
            </ThemeProvider>
          </CardContent>
      </Grid>
      {contactCard(contact1, linkedin)}
      {contactCard(contact2, git)}

      <Grid item xs={12} align='center' className={classes.gridItem}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={gmail}
          />
          <CardContent>
            <Typography variant='h4'>Email</Typography>
            <Typography variant='h6'>kettrov@gmail.com</Typography>
          </CardContent>
        </Card>
      </Grid>
      </Grid>
    </div>
  );
}
