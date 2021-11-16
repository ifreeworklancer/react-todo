import React from "react";
import classes from './AppHeader.module.scss'

function AppHeader() {
    return(
        <header className={[classes.appHeader].join(' ')}>
            <div className={[classes.logo].join(' ')}>
                Logo
            </div>
        </header>
    )
}

export default AppHeader;
