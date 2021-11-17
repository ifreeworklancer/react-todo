import React from "react";
import classes from './AppModal.module.scss'

function AppModal({children, visible, setVisible}) {
    const appModalClass = [classes.appModal];

    if (visible) {
        appModalClass.push(classes.isActive);
    }

    return (
        <div className={appModalClass.join(' ')}>
            <div className={[classes.appModalContent].join(' ')}>
                {children}
            </div>
            <div className={[classes.appModalMask].join(' ')} onClick={() => {
                setVisible(false)
            }}/>
        </div>
    )
}

export default AppModal;
