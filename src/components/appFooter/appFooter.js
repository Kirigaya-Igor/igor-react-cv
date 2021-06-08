import React from 'react';
import './appFooter.css'
import {useTranslation} from "react-i18next";

const AppFooter = () => {

    const {t} = useTranslation();

    return (
        <div className='app-footer'>
            <div className='container-fluid'>
                <div className='row'></div>
                <div className='row'>
                    <h3 className='text-center mb-3 mt-3 col-md-12'>{t('appFooter.author')}</h3>
                </div>
            </div>
        </div>
    )
}

export default AppFooter;