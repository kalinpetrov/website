import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import me from '../images/me2.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

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

export default function Home() {
  const classes = useStyles();


  return (
    <div id='home' style={{backgroundColor: '#AAABB8',}}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '80vh', paddingTop: "20px" }}
       >

      <Grid>
          <Card className={classes.root} variant="outlined">
            <CardContent>
            <ThemeProvider theme={theme}>
              <Typography variant='h1' align='center'>
                Hello, World!
              </Typography>
              <Typography variant="body1" align='center' color="textSecondary">
                Welcome to my website! This is a small little project that
                I am working on that showcases some of my skills and interests.
              </Typography>
            </ThemeProvider>
            </CardContent>
            </Card>
        </Grid>

        <img src={me}  alt="" style={{padding: "10px"}}/>
    </Grid>
    </div>
  );
}
