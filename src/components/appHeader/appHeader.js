import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import './appHeader.css';
import {firebaseInit} from "../context/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useTranslation} from "react-i18next";

const AppHeader = () => {

    const [user] = useAuthState(firebaseInit.auth());
    const {t, i18n} = useTranslation();
    const [actLang, SetActLang] = useState(i18n.language);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        SetActLang(lang);
    }

    return (
        <>
            <nav className='navbar sticky-top navbar-expand-sm navbar-dark bg-dark'>
                <div className="container-fluid">
                    <h3>{t('header.title')}</h3>
                    <button className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarContent"
                            aria-controls="navbarContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className='px-5 collapse navbar-collapse d-flex justify-content-between' id='navbarContent'>
                        <ul className='navbar-nav mr-auto mb-2'>
                            <li className='nav-item'>
                                <NavLink className='nav-link select-item' to='/' exact>{t('header.homeLink')}</NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink className='nav-link select-item' to='/reviews'>{t('header.reviewsLink')}</NavLink>
                            </li>


                        </ul>

                        <ul className='navbar-nav mr-auto mb-2'>
                            <li className="nav-item dropdown">
                                <button className="btn btn-dark dropdown-toggle" type="button"
                                        id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('header.langMenu')}: <span className='activeLang'>{actLang}</span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><button className='btn btn-dark dropdown-item select-item'
                                                onClick={() => changeLanguage('en')}>en</button>
                                    </li>
                                    <li><button className='btn btn-dark dropdown-item select-item'
                                                onClick={() => changeLanguage('pl')}>pl</button>
                                    </li>
                                    <li><button className='btn btn-dark dropdown-item select-item'
                                                onClick={() => changeLanguage('ru')}>ru</button>
                                    </li>
                                </ul>
                            </li>

                            {user ?
                                <>
                                    <li className='nav-item'>
                                        <span className='span-hello' >{t('header.sayHello')} {user.email}</span>
                                        {/*<span className='span-hello' >{t('header.sayHello') + ' Igor'}</span>*/}
                                    </li>

                                    <li className='nav-item'>
                                        <button className='btn btn-dark'
                                                onClick={() => firebaseInit.auth().signOut()}>{t('header.singOutLink')}</button>
                                    </li>
                                </>
                                :
                                <>
                                    <li className='nav-item'>
                                        <NavLink className='nav-link select-item' to='/login'>{t('header.loginLink')}</NavLink>
                                    </li>

                                    <li className='nav-item'>
                                        <NavLink className='nav-link select-item'
                                                 to='/registration'>{t('header.registrationLink')}</NavLink>
                                    </li>
                                </>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AppHeader;