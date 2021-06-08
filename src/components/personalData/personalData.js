import React, {useContext, useEffect} from 'react';
import MyPhoto from "./myPhoto.jpg";
import './personalData.scss';
import Items from "../items";
import {FirebaseContext} from "../context/firebase";
import Spinner from "../spinner";
import {useTranslation} from "react-i18next";

const PersonalData = () => {
    const {loading, items, fetchItems, removeItem} = useContext(FirebaseContext);
    const {t, i18n} = useTranslation();

    useEffect(() => {
        fetchItems('personalData', i18n.language)
        console.log('hello')
        // eslint-disable-next-line
    }, [i18n.language])
    return (
        <div className='personal-data container-fluid'>
            <div className='row'><h3 id='personalData' className='text-center mb-3 mt-3 col-md-12'>{t('homePage.personalInfo')}</h3></div>
            <div className='row'>
                <div className='col-md-1 col-sm-12'></div>
                <div className='img-block col-md-3 col-sm-12'>
                    {/*<img className="my-img w-100" src={MyPhoto} alt="myPhoto"/>*/}
                    <img className="my-img w-100" src='https://photo-ideal.ru/upload/iblock/a24/xfoto_na_rezyume_58.jpg.pagespeed.ic.YDQSNMIxfj.jpg' alt="myPhoto"/>
                </div>
                <div className='personal-data-description col-md-7 col-sm-12 text-center'>
                    {loading ? <Spinner/> :
                        <Items items={items} onRemove={removeItem} tableName='personalData'/>}
                </div>
                <div className='col-md-1 col-sm-12'></div>
            </div>
        </div>
    )
}
export default PersonalData;
