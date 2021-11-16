import './App.scss';
import React from "react";
import AppHeader from "./components/layout/header/AppHeader";
import AppFooter from "./components/layout/footer/AppFooter";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="root">
                <AppHeader/>
                <main>
                    <AppRouter/>
                </main>
                <AppFooter/>
            </div>
        </BrowserRouter>
    );
}

export default App;
