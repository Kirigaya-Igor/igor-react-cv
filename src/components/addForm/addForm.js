import React, {useState, useContext} from 'react';
import './addForm.scss'
import {AlertContext} from "../context/alertContext";
import {FirebaseContext} from "../context/firebase";
import {useTranslation} from "react-i18next";

const AddForm = ({idForm, tableName}) => {

    const [titleValue, setTitleValue] = useState('');
    const [contentValue, setContentValue] = useState('');
    const [formId] = useState(idForm)
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);
    const {t, i18n} = useTranslation();

    const onSubmit = event => {
        event.preventDefault();

        if (titleValue === '') {
            alert.showAlert(t('addForm.title') + t('error'));
        } else {
            firebase.addItem(titleValue, contentValue, tableName, i18n.language)
                .catch();

            setTitleValue(titleValue => titleValue = '');
            setContentValue(contentValue => contentValue = '');
        }
    }

    return (
        <form
            id={formId}
            action=''
            className='add-form mt-3 pt-3'
            onSubmit={onSubmit}
        >
            <div className='row mb-3'>
                <label htmlFor='inputTitle' className='col-sm-2 col-form0label'>{t('addForm.title')}:</label>
                <div className='col-sm-10'>
                    <input type='text' className='form-control' id='inputTitle'
                           value={titleValue}
                           onChange={e => setTitleValue(e.target.value)}
                    />
                </div>
            </div>
            <div className='row mb-3'>
                <label htmlFor='inputContent' className='col-sm-2 col-form0label'>{t('addForm.content')}:</label>
                <div className='col-sm-10'>
                    <input type='text' className='form-control' id='inputContent'
                           value={contentValue}
                           onChange={e => setContentValue(e.target.value)}
                    />
                </div>
            </div>
            <div className="d-flex justify-content-between p-3">
                <h5>{t('addForm.buttonLabel')}:</h5>
                <button type="submit" className="btn btn-success btn-sm">{t('addForm.addButton')}</button>
            </div>
        </form>
    )
}

export default AddForm;