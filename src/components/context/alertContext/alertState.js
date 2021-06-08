import React, {useReducer} from 'react';
import {AlertContext} from "../alertContext";
import {AlertReducer} from "../alertContext";
import {HIDE_ALERT, SHOW_ALERT} from "../actions";

export const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(AlertReducer, {visible: false})

    const showAlert = (text) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {text}
        })

        setTimeout(hideAlert, 5000);
    }

    const hideAlert = () => dispatch({type: HIDE_ALERT})

    return (
        <AlertContext.Provider value={{
            showAlert, hideAlert,
            alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}