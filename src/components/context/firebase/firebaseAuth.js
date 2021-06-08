import React, {useEffect, useState} from "react";
import {firebaseInit} from './firebaseInit'
import Spinner from "../../spinner";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        firebaseInit.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
            setLoading(false)
        });
    }, []);

    if (loading) {
        return <Spinner/>
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};