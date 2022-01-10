import React from 'react';
import classes from "./PlusButton.module.css";
import plus from "../../../../assets/svg/plus.svg";

const PlusButton = ({active}) => {
    return (
        <button onClick={event => active(event)} type="button" className={classes.plus_btn}>
            <svg height="30" width="30" className={classes.svg_sprite}>
                <use xlinkHref={plus + '#plus'}/>
            </svg>
        </button>

    );
};

export default PlusButton;