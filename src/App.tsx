import {BrowserRouter} from "react-router-dom";
import {useRoutes} from './useRoutes';
import {Context} from "./context";
import React, {useRef, useEffect} from 'react';
import {Listner} from "./components/Listner";

function App() {
    const routes = useRoutes(true)

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
                <Listner>
                    <div className="main" ref={mainWrapper}>
                        {routes}
                    </div>
                </Listner>
            </BrowserRouter>
        </Context.Provider>
    );
}

export default App;
