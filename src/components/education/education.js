import React, {useEffect, useContext} from 'react';
import './education.css';
import Spinner from "../spinner";
import Items from "../items";
import {FirebaseContext} from "../context/firebase";
import {useTranslation} from "react-i18next";

const Education = () => {

    const {loading, items, fetchItems, removeItem} = useContext(FirebaseContext);
    const {t, i18n} = useTranslation();

    useEffect(() => {
        fetchItems('education', i18n.language);
        // eslint-disable-next-line
    }, [i18n.language])

    return (
        <div className='education'>
            <div className='container-fluid'>

                <div className='row'>
                    <h3 id='education' className='text-center mb-3 mt-3 col-md-12'>{t('homePage.education')}</h3>
                </div>

                <div className='row'>
                    <div className='col-md-1 col-sm-12'></div>

                    <div className='education-description col-md-10 col-sm-12 text-center'>

                        {loading ? <Spinner/> :
                            <Items items={items} onRemove={removeItem} tableName='education'/>}

                    </div>
                    <div className='col-md-1 col-sm-12'></div>
                </div>
            </div>
        </div>
    )
}

export default Education;