import React, {useState} from 'react';
import Box from "../UI/box/Box";
import Input from "../UI/input/Input";
import ButtonAuth from "../UI/buttonAuth/ButtonAuth";
import {AuthAPI} from "../../API/AuthAPI";
import {NavLink} from "react-router-dom";
import {useBoxStatus} from "../../hooks/useBoxStatus";

const Authorization = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const statusBox = useBoxStatus()

    const login = (event) => {
        event.preventDefault()
        const data = {
            "email": email,
            "password": password
        }

        AuthAPI.responseLogin(data)
            .then(value => {
                localStorage.setItem('token', value.data.token)
                setEmail("")
                setPassword("")
                props.setIsLogin(false)
            })
            .catch(reason => {
                statusBox.setStatus(reason.response.status)
                statusBox.setText(reason.response.data.message)
            })
    }

    return (
        <React.Fragment>

            {statusBox.getStatusMessage()}

            <Box height="360px" width="580px">
                <h3>Авторизация</h3>

                <form className="box_container">
                    <Input type="email" placeholder="Ваш email:" name="email"
                           value={email}
                           onChange={event => setEmail(event.target.value)}/>
                    <Input type="password" placeholder="Ваш пароль:" name="password"
                           value={password}
                           onChange={event => setPassword(event.target.value)}/>

                    <ButtonAuth type="submit" className="btn" value="Войти" onClick={event => login(event)}/>
                    <NavLink to="/reset" className="no_password">Не помню пароль</NavLink>
                </form>

            </Box>
        </React.Fragment>
    );
};

export default Authorization;