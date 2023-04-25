import React from "react";
import classes from './AppLoading.module.scss'

function AppLoading() {
    return(
        <div className={[classes.appLoading]}>
            <div className={[classes.appLoadingIcon]}></div>
        </div>
    )
}

export default AppLoading
