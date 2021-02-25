import {Route, Switch, Redirect} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
// import SideLayout from './layouts/SideLayout';
import {Home} from "./pages/Home";
import {CategoryItem} from "./pages/CategoryItem";

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
            <AppRoute path={'/:slug'} exact component={CategoryItem} layout={MainLayout}/>
            {/*<AppRoute path={'/login'} component={Login} layout={SideLayout}/>*/}
            {/*<Redirect to={'/'}/>*/}
        </Switch>
    );
}
