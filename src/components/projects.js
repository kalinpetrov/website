import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import chart from '../images/orgchart.png';
import dfs from '../images/dfs.png';
import led from '../images/lights.jpg';
import snake from '../images/snake.png';

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
    width: 550,
    height: 450,
    paddingBottom: 10
  },
  media: {
    height: 200,
  },
  gridItem: {
    padding: 20,
  },
  header: {
    height: 'auto',
    maxWidth: 600,
    backgroundColor: '#ffffff'
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

const proj1 = {
  title: "Employee Org Chart",
  content: "This was a 10 person, semester long, academic project, where the goal was to develop an employee org chart. This project was a web based application built with react with employee data was stored in a database. This project focused on development using the agile scrum methodology.",
}

const proj2 = {
  title: "DFS Visualization",
  content: "This visualization was written in Python using the PyGames library. The grid is stored as a 2D array, and each element is represented with a number. Depending on the number, a different color square is painted to the corresponding element. The yellow path is a DFS solution from the green square to the red square."
}

const proj3 = {
  title: "LED Animations",
  content: "This project involved a 16ft programmable LED strip and a Raspberry Pi. The LED strip is connected to the Pi through the GPIO pins. Using the Adafruit library, the LED strip can be represented as an array, and each LED can be individually set to different colors. From there, I wrote a variety of functions that created different light animations. Later, the Pi was connected to VNC that could be accessed remotely."
}

const proj4 = {
  title: "Snake",
  content: "This is the classic snake game written in Java using the J2D graphics library. Using the library, the grid is created by painting a series of squares, and the items in each square are kept track by using a 2D array. The goal of this project was develop more OOP skills, and this was done by creating multiple classes (gameboard, apple, snake) and making them work together."
}


export default function Projects() {
  const classes = useStyles();

  const projectCard = (proj, image) => {

    return (
      <Grid item lg={6} sm={12} align='center' className={classes.gridItem}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={image}
          />
          <CardContent>
            <Typography variant='h4'>{proj.title}</Typography>
            <Typography varaint='body1'>{proj.content}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <div id='projects' style={{backgroundColor: '#AAABB8',}}>
      <Grid container justify='center' align='center' className={classes.container}>
        <Grid item xs={12} align='center' className={classes.gridItem}>
          <CardContent className={classes.header}>
          <ThemeProvider theme={theme}>
            <Typography variant='h1' align='center'>
              Projects
            </Typography>
          </ThemeProvider>
          </CardContent>
        </Grid>
        {projectCard(proj1, chart)}
        {projectCard(proj2, dfs)}
        {projectCard(proj3, led)}
        {projectCard(proj4, snake)}
      </Grid>
    </div>
  );
}
