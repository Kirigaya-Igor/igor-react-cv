import React, {useEffect, useContext} from 'react';
import './otherInformation.css';
import Spinner from "../spinner";
import Items from "../items";
import {FirebaseContext} from "../context/firebase";
import {useTranslation} from "react-i18next";

const OtherInformation = () => {

    const {loading, items, fetchItems, removeItem} = useContext(FirebaseContext);
    const {t, i18n} = useTranslation();

    // useEffect(() => {
    //     fetchItems('otherInformation', i18n.language);
    //     // eslint-disable-next-line
    // }, [i18n.language])

    return (
        <div className='other-information'>
            <div className='container-fluid'>

                <div className='row'>
                    <h3 id='skills' className='text-center mb-3 mt-3 col-md-12'>{t('homePage.additionalInfo')}</h3>
                </div>

                <div className='row'>
                    <div className='col-md-1 col-sm-12'></div>

                    <div className='other-information-description col-md-10 col-sm-12 text-center'>

                        {loading ? <Spinner/> :
                            <Items items={items} onRemove={removeItem} tableName='otherInformation'/>}

                    </div>
                    <div className='col-md-1 col-sm-12'></div>
                </div>
            </div>
        </div>
    )
}

export default OtherInformation;