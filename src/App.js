import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import './App.css';
import Particles from "react-particles-js";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  particles: {
    position: "absolute",
  }
});

function App() {
  const classes = useStyles();
  return (
      <>
        <Particles
          canvasClassName={classes.particles}
          params={{
            particles: {
              number: {
                value: 75,
                density: {
                  enable: false,
                  value_area: 900
                },
              },
              shape: {
                type: "none",
                stroke: {
                  width: 1,
                  color: "tomato"
                }
              },
              size: {
                value: 8,
                random: true,
                anim: {
                  enable: true,
                  speed: 10,
                  size_min: 0.1,
                  sync: true,
                }
              }
            }
          }}
        />
          <NavBar/>
          <Header />
      </>
  );
}

export default App;
