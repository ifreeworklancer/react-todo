import React from "react";
import classes from './AppInput.module.scss'

function AppInput({children, ...props}) {
    return (
        <label className={[classes.controlInput]}>
            {children &&
            <span className={[classes.label]}>{children}</span>
            }
            <input {...props} className={[classes.control]}/>
        </label>
    )
}

export default AppInput;
