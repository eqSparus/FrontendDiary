import React from 'react';

const MessageError = ({flag, message}) => {


    return (
        <div>{
            (flag && message)
            && <div style={{color: 'red'}}> {message}</div>
        }
        </div>
    )

}

export default MessageError;