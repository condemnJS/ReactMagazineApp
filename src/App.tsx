import {BrowserRouter, Router} from "react-router-dom";
import {createBrowserHistory} from 'history';
import {useRoutes} from './useRoutes';
import {Context} from "./context";
import React, {useRef, useEffect} from 'react';
import {Listner} from "./components/Listner";

export const customHistory = createBrowserHistory();  //This maintains custom history

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
            <Router history={customHistory}>
                <Listner>
                    <div className="main" ref={mainWrapper}>
                        {routes}
                    </div>
                </Listner>
            </Router>
        </Context.Provider>
    );
}

export default App;
