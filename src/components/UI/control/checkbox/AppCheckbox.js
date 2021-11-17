import React from "react";
import classes from './AppCheckbox.module.scss'

const AppCheckbox = React.forwardRef(({children, ...props}, ref) => {
    return (
        <label ref={ref} className={[classes.appControlCheckbox].join(' ')}>
            <input type="checkbox" {...props} className={[classes.checkbox].join(' ')}/>
            <span className={[classes.checkmark].join(' ')}/>
            {children &&
                <div className={[classes.label].join(' ')}>{children}</div>
            }
        </label>
    )
});

export default AppCheckbox
