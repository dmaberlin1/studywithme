import React, {useEffect, useState} from 'react';
import styles from './Timer.module.css'
import {IPropsTimer} from "../../common/types/interface";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import Button from "../button/Button";
import RestartIn from '../../assets/img/icons/restartInTimer.svg'
import Restart from "../../assets/img/icons/restart-svgrepo-com.svg";

const Timer = ({minutes=30,seconds=0}:IPropsTimer):JSX.Element => {
    const [pause, setPause] = useState(false);
    const [over, setOver] = useState(false);
    const [[m,s], setTime] = useState([minutes,seconds]);





    const tick=()=> {
        if(pause || over) return
        if(m===0 && s===0){
            return setOver(true)
        }
        else if(s===0){
            setTime([m-1,59])
        }
        else {
            setTime([m,s-1])
        }

    }

   function reset() {
        setPause(false)
        setOver(false)
        setTime([minutes,seconds])
    }

    useEffect(() => {
        const timerId=setInterval(()=>tick(),1000)
        return ()=>clearInterval(timerId)
    });




    return (
        <div className={styles.timer}>
            <div className={styles.wrapper}>
            {/*<p>{h.toString().padStart(2,'0')}</p>*/}
            <p className={styles.p}>{m.toString().padStart(2,'0')}:</p>
            <p className={styles.p}>{s.toString().padStart(2,'0')}</p>
            </div>
            <div className={styles.wrapperBtnTimers}>
                <Button onClick={()=>setTime([30,0])}>pomodoro</Button>
                <Button onClick={()=>setTime([5,0])}>short break</Button>
                <Button onClick={()=>setTime([10,0])}>long break</Button>
            </div>

            <div className={styles.wrapperBtn}>
                <Button maxWidth={'120px'} maxHeight={'95px'} onClick={()=>setPause(!pause)}
                >{pause? 'start':'pause'}
                </Button>
                <Button
                    maxWidth={'100px'} maxHeight={'90px'}
                    onClick={()=>reset()}><img src={Restart} alt="restart"/>
                </Button>
            </div>
        </div>
    );
};

export default Timer;
