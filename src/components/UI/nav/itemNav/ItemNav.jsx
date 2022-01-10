import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./ItemNav.module.css";


const ItemNav = ({path, tooltip, svgSprite, color, clickStatus}) => {


    return (
        <NavLink to={path} className={classes.box_item} tooltip={tooltip} onClick={() => clickStatus()}>
            <div>
                <svg height="30" width="30" className={classes.svg_sprite} style={{fill: color}}>
                    <use xlinkHref={svgSprite}/>
                </svg>
            </div>
        </NavLink>
    );
};

export default ItemNav;