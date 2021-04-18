import {Route, Switch, Redirect} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import SideLayout from './layouts/SideLayout';
import {AdminLayout} from './layouts/AdminLayout';
import {Home} from "./pages/Home";
import {CategoryItem} from "./pages/CategoryItem";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { AdminPage } from "./pages/AdminPage";
import {CreateCategory} from "./pages/CreateCategory";
import {CreateSubCategory} from "./pages/CreateSubCategory";
import {CreateSubSubCategory} from "./pages/CreateSubSubCategory";
import { AllCategories } from "./pages/AllCategories";
import { AllSubCategories } from "./pages/AllSubCategories";
import { AllSubSubCategories } from "./pages/AllSubSubCategories";


export const useRoutes = (isAuth) => {

    const AppRoute = ({component: Component, layout: Layout, ...rest}) => {
        return (
            <Route {...rest} render={props => (
                <Layout><Component {...props}></Component></Layout>
            )}/>
        )
    }
    function PrivateRouter({component: Component, layout: Layout, role, ...rest}) {
        return (
            <Route
                {...rest}
                render={(props) => role === 'admin'
                ? <Layout><Component {...props} /></Layout>
                : <Redirect to={'/'} /> }
            />
        )
    }
    if (localStorage.getItem('token')) {
        console.log('check token')
        return (
            <Switch>
                <AppRoute path={'/'} exact component={Home} layout={MainLayout}/>
                <PrivateRouter path={'/admin/category/create'} component={CreateCategory} role={'admin'} layout={AdminLayout}/>
                <PrivateRouter path={'/admin/subcategory/create'} component={CreateSubCategory} role={'admin'} layout={AdminLayout}/>
                <PrivateRouter path={'/admin/subsubcategory/create'} component={CreateSubSubCategory} role={'admin'} layout={AdminLayout}/>
                <PrivateRouter path={'/admin/category/all'} component={AllCategories} role={'admin'} layout={AdminLayout}/>
                <PrivateRouter path={'/admin/subcategory/all'} component={AllSubCategories} role={'admin'} layout={AdminLayout}/>
                <PrivateRouter path={'/admin/subsubcategory/all'} component={AllSubSubCategories} role={'admin'} layout={AdminLayout}/>
                <PrivateRouter path={'/admin'} component={AdminPage} role={'admin'} layout={AdminLayout}/>  
                <AppRoute path={'/:slug'} exact component={CategoryItem} layout={MainLayout}/>
                {/* <Redirect to={'/'}/> */}
            </Switch>
        );
    } else if (!localStorage.getItem('token')) {
        return (
            <Switch>
                <AppRoute path={'/login'} component={LoginPage} layout={SideLayout}/>
                <AppRoute path={'/register'} component={RegisterPage} layout={SideLayout}/>
                <AppRoute path={'/'} exact component={Home} layout={MainLayout}/>
                <AppRoute path={'/:slug'} exact component={CategoryItem} layout={MainLayout}/>
                {/* <Redirect to={'/login'}/> */}
            </Switch>
        );
    }
}
