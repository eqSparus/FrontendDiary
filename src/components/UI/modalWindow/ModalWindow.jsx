import React from 'react';
import classes from './ModalWindow.module.css'

const ModalWindow = ({children, active, setActive}) => {

    const cl = [classes.modal_window]

    if (active) {
        cl.push(classes.active)
    }

    return (
        <div className={cl.join(' ')} onClick={() => setActive(false)}>
            <div className={classes.container} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;