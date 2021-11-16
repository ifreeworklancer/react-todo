import React from "react";
import classes from './AppFooter.module.scss'

function AppFooter() {
    return(
        <footer className={[classes.appFooter].join(' ')}>
            <div className={[classes.copyright].join(' ')}>
                Copyright © {new Date().getFullYear()}
            </div>
        </footer>
    )
}

export default AppFooter;
