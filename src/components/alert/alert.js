import React, {useContext} from 'react';
import {AlertContext} from "../context/alertContext/alertContext";
import './alert.scss';

const Alert = () => {

    const {alert, hideAlert} = useContext(AlertContext)

    if (!alert.visible) {
        return null
    }

    return (
        <div className='alert alert-warning alert-dismissible fixed-top'>
            <strong>Warning!</strong>
            &nbsp;{alert.text}
            <button onClick={hideAlert} type="button" className="btn-close" aria-label="Close"></button>
        </div>
    )
}

export default Alert;