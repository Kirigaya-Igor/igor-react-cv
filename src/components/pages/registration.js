import React, {useState, useContext} from 'react';
import AppHeader from "../appHeader";
import AppFooter from "../appFooter";
import './registration.scss';
import {AuthContext, firebaseInit} from '../context/firebase';
import {Redirect, useHistory} from "react-router-dom";
import {AlertContext} from "../context/alertContext";
import {useTranslation} from "react-i18next";

export const Registration = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    let history = useHistory();
    const alert = useContext(AlertContext);
    const {t} = useTranslation();

    const onSubmit = async event => {
        event.preventDefault();

        if(check){
            try {
                await firebaseInit.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                            setEmail(email => email = '');
                            setPassword(password => password = '');
                            history.push("/")
                        }
                    )
                    .catch(error => alert.showAlert(`${error.message}`));

            } catch (error) {
                alert.showAlert(`${error.message}`);
            }
        } else {
            alert.showAlert(t('loginPage.checkboxError'));
        }

    }

    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/"/>;
    }

    return (
        <>
            <AppHeader/>

            <div className='container-fluid'>

                <div className='row registration-footer'>

                    <div className='col-md-3 col-sm-12'></div>

                    <div className='col-md-6 col-sm-12'>
                        <div className='reg-form'>

                            <h1 className='text-center col-md-12 col-sm-12'>{t('registrationPage.title')}</h1>

                            <form
                                action=''
                                onSubmit={onSubmit}
                            >
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">{t('registrationPage.emailLabel')}</label>
                                    <input type="email"
                                           className="form-control"
                                           id="exampleInputEmail1"
                                           value={email}
                                           onChange={e => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">{t('registrationPage.passwordLabel')}</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck1"
                                        value={check}
                                        onChange={() => setCheck(!check)}
                                    />
                                    <label className="form-check-label" htmlFor="exampleCheck1">{t('registrationPage.checkBox')}</label>
                                </div>

                                <button type="submit" className="btn btn-success">{t('registrationPage.registrationButton')}</button>
                            </form>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-12'></div>
                </div>

            </div>

            <AppFooter/>
        </>
    )
}