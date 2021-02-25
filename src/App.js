import {BrowserRouter} from "react-router-dom";
import {useRoutes} from './useRoutes';
import {Context} from "./context";
import React, {useRef} from 'react';

function App() {
    const routes = useRoutes(false)

    const main = useRef(null);
    const toggleLayoutStyles = () => {
        main.current.classList.toggle('layoutColor');
    }

    return (
        <Context.Provider value={{
            toggleLayoutStyles
        }}>
            <BrowserRouter>
                <div className="main" ref={main}>
                    {routes}
                </div>
            </BrowserRouter>
        </Context.Provider>
    );
}

export default App;
