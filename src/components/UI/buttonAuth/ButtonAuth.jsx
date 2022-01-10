import React from 'react';
import classes from "./ButtonAuth.module.css";

const ButtonAuth = (props) => {
    return (
        <input {...props} className={classes.btn}/>
    );
};

export default ButtonAuth;