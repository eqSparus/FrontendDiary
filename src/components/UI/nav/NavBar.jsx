import React from 'react';
import logo from "../../../assets/logo/logo.png";
import classes from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={classes.navbar}>

            <img src={logo} alt="logo"/>

            <h1>Личный дневник</h1>

            <nav>
                <NavLink to="/login">Вход</NavLink>
                <NavLink to="/registration">Регистрация</NavLink>
            </nav>
        </div>
    );
};

export default NavBar