import React, {useState} from 'react';
import BoxMessage from "../components/UI/boxMessage/BoxMessage";

export const useBoxStatus = () => {

    const [status, setStatus] = useState();
    const [text, setText] = useState('')

    const getStatusMessage = () => {

        if (status < 300) {
            return <BoxMessage text={text} color={'#000099'}/>
        } else if (status >= 300) {
            return <BoxMessage text={text} color={'#b00000'}/>
        }
        return null
    }

    return {
        setText,
        setStatus,
        getStatusMessage
    }
}