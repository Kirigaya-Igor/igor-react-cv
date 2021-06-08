import React from 'react';
import Spinner from "../spinner";
import {useTranslation} from "react-i18next";

const ReviewsItem = ({loading, data, reviews, user, onRemove}) => {

    const {t} = useTranslation();

    return (
        <>
            {loading ? <Spinner/> : data ?
                <div className='reviews-items'>
                    <ul className="list-group list-group-flush">
                        {reviews.map(item => (
                            <li className="list-group-item" key={item.id}>

                                <div style={{
                                    border: user ? item.reviewId === user.uid ? '3px solid green' : '2px solid black' : '2px solid black'
                                }}
                                >
                                    <div className='d-flex justify-content-start'>
                                                    <span className="p-2">
                                                        <strong>{t('reviewsPage.name')}:</strong> {item.name}
                                                    </span>
                                    </div>

                                    <div className='d-flex justify-content-start'>
                                                    <span className='p-2'>
                                                        <strong>{t('reviewsPage.date')}:</strong> {item.date}
                                                    </span>
                                    </div>

                                    <div className='d-flex justify-content-start'>
                                                    <span className="p-2">
                                                        <strong>{t('addForm.title')}:</strong> {item.title}
                                                    </span>
                                    </div>

                                    <div className='reviews-items-content d-flex justify-content-start'>
                                                    <span className='p-2'>
                                                        <strong>{t('addForm.content')}:</strong> {item.content}
                                                    </span>
                                    </div>

                                    {user ?
                                        item.reviewId === user.uid ?
                                            <div className='d-flex justify-content-center'>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger btn-sm m-3"
                                                    onClick={() => onRemove(item.id)}
                                                >{t('deleteButton')}</button>
                                            </div>
                                            :
                                            <div></div>
                                        :
                                        <div></div>
                                    }
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                :
                <div className='reviews-items'>
                    <h3 id='reviews'
                        className='text-center mb-3 mt-3 col-md-12'>{t('reviewsPage.dbIsEmpty')}</h3>
                </div>
            }
        </>
    )
}

export default ReviewsItem;