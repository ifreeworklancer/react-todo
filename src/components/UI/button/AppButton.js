import React from "react";
import classes from './AppButton.module.scss'

function AppButton({children, ...props}) {
    return(
        <button className={[classes.appButton]} {...props}>
            {children}
        </button>
    )
}

export default AppButton
