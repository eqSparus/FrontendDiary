import React, {useEffect, useState} from 'react';
import {tokenProvider} from "./tokenProvider";

export const useAuthentication = () => {


    const [isLogin, setLogin] = useState(tokenProvider.isLogin);

    useEffect(()=>{



    })


    return {}
};