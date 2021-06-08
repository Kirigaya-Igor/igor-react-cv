import React from 'react';
import {useTranslation} from "react-i18next";
import {useAuthState} from "react-firebase-hooks/auth";
import {firebaseInit} from "../context/firebase";
import AddForm from "../addForm";

const admin = process.env.REACT_APP_ADMIN_ID;

const Items = ({items, onRemove, tableName}) => {
    const {t, i18n} = useTranslation();
    const [user] = useAuthState(firebaseInit.auth());
    return (
        <>
            <ul className="list-group list-group-flush">
                {items[tableName].map(item => (
                    <li className="list-group-item d-flex justify-content-between" key={item.id}>
                        <h6 className="term">{item.title}</h6>
                        <div className='d-flex justify-content-end'>
                            <span className='pt-2'>{item.content}</span>
                            { user ? item.reviewId === user.uid ?
                                <button type="button" className="btn btn-danger btn-sm"
                                        onClick={() => onRemove(item.id, tableName, i18n.language)}>{t('deleteButton')}</button>
                                :
                                <div></div> : <div></div>
                            }
                        </div>
                    </li>
                ))}
            </ul>
            {user ? admin === user.uid ? <AddForm idForm='personal-data-form' tableName={tableName}/> : <div></div> : <div></div>}
        </>
    )
}
export default Items;