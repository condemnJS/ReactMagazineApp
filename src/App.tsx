import {BrowserRouter} from "react-router-dom";
import {useRoutes} from './useRoutes';
import {Context} from "./context";
import React, {useRef} from 'react';

function App() {
    const routes = useRoutes(false)

    const mainWrapper = useRef<HTMLInputElement>(null);
    const toggleLayoutStyles = () => {
        if(mainWrapper && mainWrapper.current) {
            mainWrapper.current.classList.toggle('layoutColor');
        }
        console.log(mainWrapper.current)
    }

    return (
        <Context.Provider value={{
            toggleLayoutStyles
        }}>
            <BrowserRouter>
                <div className="main" ref={mainWrapper}>
                    {routes}
                </div>
            </BrowserRouter>
        </Context.Provider>
    );
}

export default App;
