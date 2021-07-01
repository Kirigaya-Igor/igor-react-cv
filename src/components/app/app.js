import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Home, ReviewsPage, Login, Registration} from "../pages";
import {AlertState} from '../context/alertContext'
import Alert from "../alert";
import {firebaseInit, FirebaseState, AuthProvider} from "../context/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import Spinner from "../spinner";

const App = () => {

    const [user, loading, error] = useAuthState(firebaseInit.auth());

    if (loading) {
        return <Spinner/>
    }

    return (
        <AuthProvider>
            <AlertState>
                <FirebaseState>
                    <BrowserRouter>
                        <Alert/>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/reviews' component={ReviewsPage}/>
                            <Route exact path='/login' component={Login}/>
                            <Route exact path='/registration' component={Registration}/>
                            <Redirect to={"/"} />
                        </Switch>
                    </BrowserRouter>
                </FirebaseState>
            </AlertState>
        </AuthProvider>

    )
}

export default App;