import React from 'react';
import classes from "./Box.module.css";

const Box = ({children, height, width}) => {
    return (
        <div className={classes.box} style={{height: height, width: width}}>
                {children}
        </div>
    );
};

export default Box;