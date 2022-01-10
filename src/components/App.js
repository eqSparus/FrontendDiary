import NavBar from "./UI/nav/NavBar";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Authorization from "./pages/Authorization";
import Registration from "./pages/Registration";
import Confirm from "./pages/Confirm";
import PassReset from "./pages/PassReset";
import PassRecover from "./pages/PassRecover";
import Main from "./pages/Main";
import {useState} from "react";

const App = () => {

    const token = localStorage.getItem('token')
    const [isLogin, setIsLogin] = useState(!token)

    if (token !== null && JSON.parse(atob(token.split('.')[1])).exp < new Date().getTime() / 1000) {
        setIsLogin(false)
        localStorage.removeItem('token')
    }

    return (

        <BrowserRouter>
            <Switch>
                <Route path="/recover/:token"><PassRecover/></Route>
                <Route path="/confirm"><Confirm/></Route>
                {isLogin ?
                    <>
                        <div className="container_auth">
                            <NavBar/>
                            <Route path="/login" render={(props) => (
                                <Authorization {...props} setIsLogin={setIsLogin}/>
                            )}/>
                            <Route path="/registration"><Registration/></Route>
                            <Route path="/reset"><PassReset/></Route>
                            <Redirect to="/login"/>
                        </div>
                    </> :
                    <>
                        <Route exact path="/main/today">
                            <Main setIsLogin={setIsLogin}/>
                        </Route>
                        <Redirect to="/main/today"/>
                    </>
                }
            </Switch>
        </BrowserRouter>

    )
}

export default App
