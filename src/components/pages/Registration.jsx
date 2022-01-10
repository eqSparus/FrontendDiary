import React from 'react';
import Input from "../UI/input/Input";
import ButtonAuth from "../UI/buttonAuth/ButtonAuth";
import Box from "../UI/box/Box";
import {useValueReg} from "../../hooks/useValueReg";
import {AuthAPI} from "../../API/AuthAPI";
import {useBoxStatus} from "../../hooks/useBoxStatus";
import {useDisabledValid} from "../../hooks/useDisabledValid";
import MessageError from "../UI/messageError/MessageError";

const Registration = () => {

    const name = useValueReg({type: "default", textErr: "Поле не может быть пустым"});
    const email = useValueReg({type: "email", textErr: "Поле не может быть пустым"})
    const password = useValueReg({type: "password", textErr: "Поле не может быть пустым"})
    const statusBox = useBoxStatus()
    const validForm = useDisabledValid([name.err, email.err, password.err]);

    const register = (event) => {
        event.preventDefault()

        const data = {
            "username": name.value,
            "email": email.value,
            "password": password.value
        }

        AuthAPI.responseReg(data)
            .then(value => {
                statusBox.setStatus(value.status)
                statusBox.setText(value.data.message)
                name.setValue("")
                email.setValue("")
                password.setValue("")
            })
            .catch(reason => {
                statusBox.setStatus(reason.response.status)
                statusBox.setText(reason.response.data.message)
            });

    }


    return (
        <React.Fragment>

            {statusBox.getStatusMessage()}

            <Box height="460px" width="580px">
                <h3>Регистрация</h3>

                <form className="box_container">

                    <MessageError flag={name.flag} message={name.err}/>
                    <Input type="text" placeholder="Ваше имя:" name="name"
                           value={name.value}
                           onChange={event => name.onChange(event)}
                           onBlur={() => name.onBluer()}/>

                    <MessageError flag={email.flag} message={email.err}/>
                    <Input type="email" placeholder="Ваш email:" name="email"
                           value={email.value}
                           onChange={event => email.onChange(event)}
                           onBlur={() => email.onBluer()}/>

                    <MessageError flag={password.flag} message={password.err}/>
                    <Input type="password" placeholder="Ваш пароль:" name="password"
                           value={password.value}
                           onChange={event => password.onChange(event)}
                           onBlur={() => password.onBluer()}/>

                    <ButtonAuth disabled={!validForm.valid} type="submit" className="btn" value="Зарегистрироваться"
                                onClick={event => register(event)}/>
                </form>
            </Box>
        </React.Fragment>
    );
};

export default Registration;