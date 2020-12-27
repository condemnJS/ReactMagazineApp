import {Route, Switch, Redirect, Router} from "react-router-dom";
import {Home} from "./templates/Home";
import {Register} from "./templates/Register";
import {Login} from "./templates/Login";

export const useRoutes = (isAuth) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path={'/'} exact component={Home}/>
                <Redirect to={'/'}/>
            </Switch>
        );
    }
    return (
        <Switch>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/register'} component={Register}/>
            <Route path={'/login'} component={Login}/>
            <Redirect to={'/'}/>
        </Switch>
    );
}