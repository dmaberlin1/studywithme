import React from 'react';

import './App.module.css';
import {Box, Grid} from "@mui/material";
import General from "./components/config/general/General";
import City from '../src/assets/img/backgrounds/city.jpg'
import Africa from '../src/assets/img/backgrounds/africa.jpg'
import SkyBlue from '../src/assets/img/backgrounds/skybluered.jpg'
import SkyOrange from '../src/assets/img/backgrounds/skyorange.jpg'
import {inspect} from "util";
import styles from './App.module.css'
import Button from "./components/button/Button";
import Logo from '../src/assets/img/logo.png'
import Timer from "./components/timer/Timer";
import Config from './assets/img/icons/config-svgrepo-com.svg'
import Restart from './assets/img/icons/restart-svgrepo-com.svg'



function App() {
  return (
      <div  className={styles.app} style={{backgroundImage:`url(${SkyBlue})`}}>
          <img className={styles.logo} src={Logo} alt="logo"/>
          <div className={styles.wrapperApp}>
            <div className={styles.wrapper}>
                <Button>pomodoro</Button>
                <Button>short break</Button>
                <Button>long break</Button>
            </div>
          <div className={styles.wrapperTimer}>
            <Timer seconds={0} minutes={30}></Timer>
          </div>
          <div className={styles.wrapperSettings}>
              <Button >start</Button>
              <Button ><img src={Restart} alt="config"/></Button>
              <Button ><img src={Config} alt="config"/></Button>
          </div>
      </div>
      </div>
  );
}

export default App;
