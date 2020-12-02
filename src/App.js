import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from './elements/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container } from '@material-ui/core';
// import Card from './components/Card';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


import Card from "./components/Cards";
import Home from "./components/api";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#84B28E' }}>
        <Container>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} >
            KELOMPOK 5
          </Typography>
          <Link to="/"><Button background="inherit">Home</Button></Link>
          <Link to="/about"><Button background="inherit">About</Button></Link>
        </Toolbar>
        </Container>
      </AppBar>
      <Container>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={Card} />
      </Switch>
      </Container>
    </div>
    </Router>
  );
}

export default App;
