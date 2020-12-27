import {BrowserRouter} from "react-router-dom";
import {useRoutes} from './useRoutes';
import {Header} from "./components/Header";

function App() {
    const routes = useRoutes(false)
    return (
        <BrowserRouter>
            <Header />
            <div className="container">
                {routes}
            </div>
        </BrowserRouter>
    );
}

export default App;
