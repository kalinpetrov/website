import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  header: {
    position: 'fixed',
    background: '#25274D',
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.header}>
        <Toolbar>
        <Grid container justify='center' align='center'>
          <Grid item xs={12} align='center' className={classes.content}>
            <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
            <li><Link to="hobbies" spy={true} smooth={true}>Hobbies</Link></li>
            <li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
            <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
