import React, {useEffect, useContext} from 'react';
import './experince.css';
import {FirebaseContext} from "../context/firebase";
import Spinner from "../spinner";
import Items from "../items";
import {useTranslation} from "react-i18next";

const Experience = () => {

    const {loading, items, fetchItems, removeItem} = useContext(FirebaseContext);
    const {t, i18n} = useTranslation();

    // useEffect(() => {
    //     fetchItems('experience', i18n.language);
    //     // eslint-disable-next-line
    // }, [i18n.language])

    return (
        <div className='experience'>
            <div className='container-fluid'>

                <div className='row'>
                    <h3 id='experience' className='text-center mb-3 mt-3 col-md-12'>{t('homePage.experience')}</h3>
                </div>

                <div className='row'>
                    <div className='col-md-1 col-sm-12'></div>

                    <div className='experience-description col-md-10 col-sm-12 text-center'>

                        {loading ? <Spinner/> :
                            <Items items={items} onRemove={removeItem} tableName='experience'/>}

                    </div>
                    <div className='col-md-1 col-sm-12'></div>
                </div>
            </div>
        </div>
    )
}

export default Experience;