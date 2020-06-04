import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(7),
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <div className="banner-text">
          <div className={classes.root}>
            <Avatar alt="Frankie" src="/images/me.jpg" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
