import React from 'react';
import classes from "./BoxMessage.module.css"

const BoxMessage = ({text, color}) => {

    return (
        <div className={classes.container}>
            <div className={classes.box_message} style={{
                border: `1px solid ${color}`,
                backgroundImage: `linear-gradient(5deg, ${color}, ${color}B1, ${color}B2)`
            }}>
                {text}
            </div>
        </div>
    )
}

export default BoxMessage;