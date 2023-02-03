import React, {useState} from 'react';

import './App.module.css';
import {Box, Grid} from "@mui/material";
import General from "./components/config/generalConfig/GeneralConfig";
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
import GeneralConfig from "./components/config/generalConfig/GeneralConfig";



function App() {
    const [show, setShow] = useState('none');
    const [[m,s], setTime] = useState([30,0]);


    const openConfig = () => {

        return  setShow('flex')

    }
    const closeConfig=()=>{
        if(show==='flex'){
        return setShow('none')
        }
    }
    const setPomodoro=()=>{
        return setTime([30,0])
    }
    const setShortBreak=()=>{
        return setTime([5,0])
    }
    const setLongBreak=()=>{
        return setTime([10,0])
    }
  return (
      <div  className={styles.app} style={{backgroundImage:`url(${SkyBlue})`}}>
          <img className={styles.logo} src={Logo} alt="logo"/>
          <div className={styles.wrapperApp}>
            <div className={styles.wrapper}>
                <Button onClick={()=>setPomodoro()}>pomodoro</Button>
                <Button onClick={()=>setShortBreak()}>short break</Button>
                <Button onClick={()=>setLongBreak()}>long break</Button>
            </div>
          <div className={styles.wrapperTimer}>
            <Timer seconds={s} minutes={m}></Timer>
          </div>
          <div className={styles.wrapperSettings}>
              <Button >start</Button>
              <Button ><img src={Restart} alt="config"/></Button>
              <Button onClick={()=>openConfig()} ><img src={Config} alt="config"/></Button>
          </div>
              <GeneralConfig close={closeConfig} display={show}></GeneralConfig>
      </div>
      </div>
  );
}

export default App;
