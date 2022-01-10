import {useEffect, useState} from "react";

export const useDisabledValid = (arr) => {

    const [valid, setValid] = useState(false)

    useEffect(() => {
        if ([...arr].find(value => value !== "")) {
            setValid(false)
        } else {
            setValid(true)
        }
    }, [arr])

    return {
        setValid,
        valid
    }
}