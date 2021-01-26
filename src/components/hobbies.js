import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import snow from '../images/mountains.jpg';
import run from '../images/running.jpg';
import csgo from '../images/csgo.jpg';
import puzzle from '../images/suduko.png';

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

const hobby1 = {
  title: "Running",
  content: "Initially, running started as a way to get me out of gym class in high school. Overtime, my fitness began to increase and slowly I built an appreciation for the sport. Eventaully, I set some PRs such as 9:32 for two miles and 15:51 for 5k. I decided to continue my passion at university, however, I decided to drop it as it was overwhelming competing and being a student.",
  source: "Image Source: My Mom"
}

const hobby2 = {
  title: "Snowboarding",
  content: "Although I don't go as nearly as much as I used to, I still try to go snowboarding at least a few times per year. I started when I was about 11 years old and I still get the same joy as I did then every time I go.",
  source: "Image Source: Killington Mt."
}

const hobby3 = {
  title: "Video Games",
  content: "I've been playing video games ever since I can remember. My current favorite at the momement is Counter Strike, which is a 5v5 competitive shooter. One team tries to attack one of two areas on a map and the other team tries to defend. The game is very mechanical and is quite difficult, but very rewarding when there is great team play.",
  source: "Image Source: CS:GO"
}

const hobby4 = {
  title: "Logic Games",
  content: "Recently, I started enjoying playing games such as Suduko and Minesweeper. I find joy playing games, where you can use deductive reasoning to reach the end goal. These games are quite relaxing, and a fun way to challenge the mind. ",
  source: "Image Source: Wikipedia"
}

export default function Hobbies() {
  const classes = useStyles();

  const hobbyCard = (hobby, image) => {

    return (
      <Grid item lg={6} sm={12} align='center' className={classes.gridItem}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={image}
          />
          <CardContent>
            <Typography variant='h4'>{hobby.title}</Typography>
            <Typography varaint='body1'>{hobby.content}</Typography>
            <Typography component="div">
              <Box fontStyle="italic" m={1}>
                {hobby.source}
              </Box>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <div id='hobbies' style={{backgroundColor: '#464866',}}>
      <Grid container justify='center' align='center' className={classes.container}>
      <Grid item xs={12} align='center' className={classes.gridItem}>
          <CardContent className={classes.header}>
          <ThemeProvider theme={theme}>
            <Typography variant='h1' align='center'>
              Hobbies
            </Typography>
          </ThemeProvider>
          </CardContent>
      </Grid>
      {hobbyCard(hobby1, run)}
      {hobbyCard(hobby2, snow)}
      {hobbyCard(hobby3, csgo)}
      {hobbyCard(hobby4, puzzle)}
      </Grid>
    </div>
  );
}
