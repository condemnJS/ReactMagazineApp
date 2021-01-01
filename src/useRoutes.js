import {Route, Switch, Redirect, Router} from "react-router-dom";
import {Home} from "./templates/Home";
import {Register} from "./templates/Register";
import {Login} from "./templates/Login";
import MainLayout from './layouts/MainLayout';
import SideLayout from './layouts/SideLayout';

export const useRoutes = (isAuth) => {
    const AppRoute = ({component: Component, layout: Layout, ...rest}) => {
        return (
            <Route  {...rest} render={props => (
                <Layout><Component {...props}></Component></Layout>
            )}/>
        )
    }
    if (isAuth) {
        return (
            <Switch>
                {/*<AppRoute path={'/'} exact component={Home} layout={MainLayout}/>*/}
                <Redirect to={'/'}/>
            </Switch>
        );
    }
    return (
        <Switch>
            <AppRoute path={'/'} exact component={Home} layout={MainLayout}/>
            <AppRoute path={'/login'} component={Login} layout={SideLayout}/>
            {/*<Redirect to={'/'}/>*/}
        </Switch>
    );
}