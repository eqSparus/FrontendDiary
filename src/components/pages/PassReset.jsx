import React from 'react';
import Box from "../UI/box/Box";
import Input from "../UI/input/Input";
import {useValueReg} from "../../hooks/useValueReg";
import ButtonAuth from "../UI/buttonAuth/ButtonAuth";
import {RecoverAPI} from "../../API/RecoverAPI";
import {useBoxStatus} from "../../hooks/useBoxStatus";
import {useDisabledValid} from "../../hooks/useDisabledValid";
import MessageError from "../UI/messageError/MessageError";

const PassReset = () => {

    const email = useValueReg({type: "email"})
    const boxMassage = useBoxStatus()
    const disabled = useDisabledValid(Array.of(email.err))

    const resetPass = (event) => {
        event.preventDefault()

        const data = {
            "email": email.value
        }

        RecoverAPI.responseRecoverPasswordByMail(data)
            .then(value => {
                boxMassage.setStatus(value.request.status)
                boxMassage.setText(value.data.message)
                email.setValue("")
            })
            .catch(reason => {
                boxMassage.setStatus(reason.response.status)
                boxMassage.setText(reason.response.data.message)
            })

    }

    return (
        <React.Fragment>
            {boxMassage.getStatusMessage()}
            <Box height="280px" width="580px">
                <h3>Введите ваш email адрес</h3>

                <form className="box_container">
                    <MessageError flag={email.flag} message={email.err}/>
                    <Input type="email" placeholder="Ваш email:" name="email"
                           value={email.value}
                           onChange={event => email.onChange(event)}
                           onBlur={() => email.onBluer()}/>

                    <ButtonAuth disabled={!disabled.valid}  type="submit" className="btn" value="Отправить письмо"
                                onClick={event => resetPass(event)}/>
                </form>
            </Box>
        </React.Fragment>
    );
};

export default PassReset;