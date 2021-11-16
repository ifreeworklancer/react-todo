import './App.scss';
import React from "react";
import AppHeader from "./components/layout/header/AppHeader";
import AppFooter from "./components/layout/footer/AppFooter";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="root">
            <AppHeader/>
            <main>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
            </main>
            <AppFooter/>
        </div>
    );
}

export default App;
