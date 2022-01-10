import React from 'react';
import classes from "./MainStatusBar.module.css";

const MainStatusBar = ({status}) => {
    return (
        <div className={classes.bac}>
            <div className={classes.status}>
                {status}
            </div>
        </div>
    );
};

export default MainStatusBar;