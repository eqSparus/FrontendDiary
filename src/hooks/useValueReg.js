import {useState} from 'react';
import {useValidValue} from "./useValidValue";

export const useValueReg = ({type, init = "", textErr = ""}) => {

    const [value, setValue] = useState(init);
    const [flag, setFlag] = useState(false)
    const [err, setErr] = useState(textErr)
    const valid = useValidValue({type: type, setErr: setErr});

    const onBluer = () => {
        setFlag(true)
    }

    const onChange = (event) => {
        setValue(event.target.value)
        valid(event)
    }

    return {
        value,
        setValue,
        onBluer,
        onChange,
        err,
        flag
    }
}