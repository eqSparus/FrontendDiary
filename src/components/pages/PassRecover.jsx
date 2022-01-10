import React from 'react';
import Box from "../UI/box/Box";
import Input from "../UI/input/Input";
import ButtonAuth from "../UI/buttonAuth/ButtonAuth";
import {useValueReg} from "../../hooks/useValueReg";
import {RecoverAPI} from "../../API/RecoverAPI";
import {useParams} from "react-router-dom";
import {useBoxStatus} from "../../hooks/useBoxStatus";
import {useDisabledValid} from "../../hooks/useDisabledValid";
import MessageError from "../UI/messageError/MessageError";
import NavBar from "../UI/nav/NavBar";

const PassRecover = () => {
    const password = useValueReg({type: "password"})
    const boxMassage = useBoxStatus()
    const disabled = useDisabledValid(Array.of(password.err))

    const {token} = useParams()

    const updatePassword = (event) => {
        event.preventDefault()
        const data = {
            "password": password.value
        }

        RecoverAPI.responseUpdatePassword(data, token)
            .then(value => {
                boxMassage.setStatus(value.request.status)
                boxMassage.setText(value.data.message)
                password.setValue("")
            })
            .catch(reason => {
                console.log(reason.request.status)
            })
    }

    return (
        <React.Fragment>
            <div className="container_auth">
                <NavBar/>
                {boxMassage.getStatusMessage()}
                <Box height="280px" width="580px">
                    <h3>Введите новый пароль</h3>

                    <form className="box_container">
                        <MessageError flag={password.flag} message={password.err}/>
                        <Input type="password" placeholder="Введите новый пароль:" name="password"
                               value={password.value}
                               onChange={event => password.onChange(event)}
                               onBlur={() => password.onBluer()}/>

                        <ButtonAuth disabled={!disabled.valid}  type="submit" className="btn" value="Изменить пароль"
                                    onClick={event => updatePassword(event)}/>
                    </form>
                </Box>
            </div>
        </React.Fragment>
    );
};

export default PassRecover;