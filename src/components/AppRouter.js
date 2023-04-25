import React from "react";
import {Route, Routes} from "react-router-dom";
import {routes} from "../router";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route {...route} key={route.path}/>
            )}
        </Routes>
    );
};

export default AppRouter;
