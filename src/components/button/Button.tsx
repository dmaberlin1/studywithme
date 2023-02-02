import React, {FC} from 'react';
import {IPropsButton} from "../../common/types/interface";
import styles from './Button.module.css'

const Button = (props:IPropsButton):JSX.Element => {
    const {children,onClick,maxWidth,maxHeight}=props
    return (
        <button
            style={{maxWidth:`${maxWidth}`,maxHeight:`${maxHeight}`}} className={styles.btn}
            onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
