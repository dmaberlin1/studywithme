import React, {useState} from 'react';
import Button from "../../button/Button";
import styles from './GeneralConfig.module.css'
import General from "../general/General";
import Sounds from "../sounds/Sounds";
import Timers from "../timers/Timers";

const GeneralConfig = (props:any) => {
    const [configPage, setConfigPage] = useState(0);
    const {display,close}=props
    const ShowGeneral=()=>{
        return <General setConfigPage={setConfigPage}></General>
    }
    const showSounds=()=>{
        return <Sounds setConfigPage={setConfigPage}></Sounds>
    }

    const showTimers=()=>{
        return <Timers setConfigPage={setConfigPage}></Timers>
    }

    const menuSelection=()=>{
        if(configPage===0){
            return ShowGeneral()
        }else if(configPage===1){
            return showTimers()
        }else if(configPage===2){
            return showSounds()
        }

    }

    return (

        <div  style={{display:display}} className={styles.WrapperGeneral}>
            <div className={styles.sideMenu}>
                <button onClick={()=>setConfigPage(0)} className={styles.SetConfig}>General</button>
                <button onClick={()=>setConfigPage(1)} className={styles.SetConfig}>Timers</button>
                <button onClick={()=>setConfigPage(2)} className={styles.SetConfig}>Sounds</button>
                <button className={styles.Close} onClick={close}>close</button>
            </div>
            {menuSelection()}

        </div>

    );
};

export default GeneralConfig;
