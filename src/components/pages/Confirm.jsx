import React from 'react';
import NavBar from "../UI/nav/NavBar";

const Confirm = () => {
    return (
        <div className="container_auth">
            <NavBar/>
            <h1 style={{textAlign: "center"}}>Ваша почта успешно подтверждена</h1>
        </div>
    );
};

export default Confirm;