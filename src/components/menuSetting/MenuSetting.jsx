import React from 'react';
import classes from "./MenuSetting.module.css";
import ButtonAuth from "../UI/buttonAuth/ButtonAuth";
import MessageError from "../UI/messageError/MessageError";
import {useValueReg} from "../../hooks/useValueReg";
import {useDisabledValid} from "../../hooks/useDisabledValid";
import {UpdateAPI} from "../../API/UpdateAPI";
import {useBoxStatus} from "../../hooks/useBoxStatus";

const MenuSetting = ({user, setUser}) => {

    const name = useValueReg({type: "default", init: user.username})
    const password = useValueReg({type: "password", textErr: ""})
    const newPassword = useValueReg({type: "password", textErr: ""})
    const validName = useDisabledValid([name.err])
    const validPassword = useDisabledValid([password.err, newPassword.err])
    const statusBox = useBoxStatus()


    const updatePassword = (event) => {
        event.preventDefault()
        UpdateAPI.updatePassword(password.value, newPassword.value)
            .then(value => {
                console.log(value)
                statusBox.setStatus(value.status)
                statusBox.setText(value.data.message)
            }).catch(reason => {
            statusBox.setStatus(reason.response.status)
            statusBox.setText(reason.response.data.message)
        });
        password.setValue('')
        newPassword.setValue('')
    }

    const updateName = (event) => {
        event.preventDefault()

        UpdateAPI.updateName({
            username: name.value
        }).then(value => setUser(value.data))
    }

    return (
        <div className={classes.setting_con}>

            {statusBox.getStatusMessage()}

            <div className={classes.input_setting}>
                <label>Изменить имя</label>
                <br/>
                <MessageError flag={name.flag} message={name.err}/>
                <input className={classes.filed}
                       type="text"
                       placeholder="Имя"
                       name="name"
                       value={name.value}
                       onChange={(event => name.onChange(event))}
                       onBlur={() => name.onBluer()}/>
                <ButtonAuth type="button"
                            value="Изменить"
                            disabled={!validName.valid}
                            onClick={event => updateName(event)}/>
            </div>

            <div className={classes.input_setting}>
                <label>Изменить пароль</label>
                <br/>
                <MessageError flag={password.flag} message={password.err}/>
                <input className={classes.filed}
                       type="password"
                       placeholder="Старый пароль"
                       value={password.value}
                       onChange={event => password.onChange(event)}
                       onBlur={() => password.onBluer()}/>
                <br/>
                <MessageError flag={newPassword.flag} message={newPassword.err}/>
                <input className={classes.filed}
                       type="password"
                       placeholder="Новый пароль"
                       value={newPassword.value}
                       onChange={event => newPassword.onChange(event)}
                       onBlur={() => newPassword.onBluer()}/>
                <ButtonAuth type="button"
                            value="Изменить пароль"
                            disabled={!validPassword.valid}
                            onClick={event => updatePassword(event)}/>
            </div>

        </div>
    )
}

export default MenuSetting;