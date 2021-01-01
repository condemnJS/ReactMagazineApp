import {BrowserRouter} from "react-router-dom";
import {useRoutes} from './useRoutes';

function App() {
    const routes = useRoutes(false)
    return (
        <BrowserRouter>
            <div className="main">
                {routes}
            </div>
        </BrowserRouter>
    );
}

export default App;
