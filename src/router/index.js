import TodoPage from "../page/TodoPage";
import React from "react";

export const MAIN_ROUTES = {
    MAIN: () => '/'
}

export const routes = [
    {path: MAIN_ROUTES.MAIN(), element: <TodoPage/>},
]
