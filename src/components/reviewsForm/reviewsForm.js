import React, {useContext} from 'react';
import {useTranslation} from "react-i18next";
import {AlertContext} from "../context/alertContext";

const ReviewsForm = ({user, reviews, name, setName, title, setTitle, content, setContent, addReviews}) => {

    const {t} = useTranslation();
    const alert = useContext(AlertContext);

    const onSubmit = (event) => {
        event.preventDefault();

        if (name === '' || name === null) {
            alert.showAlert(t('reviewsPage.name') + t('error'));
        } else if (title === '' || title === null) {
            alert.showAlert(t('addForm.title') + t('error'));
        } else if (content === '' || content === null) {
            alert.showAlert(t('addForm.content') + t('error'));
        } else {
            addReviews();
            setName(name => name = '');
            setTitle(title => title = '');
            setContent(content => content = '');
        }
    }


    return (
        <>
            {!user ?
                <div className='reviews-form mb-3'>
                    <h3 id='reviews'
                        className='text-center mb-3 mt-3 col-md-12'>{t('reviewsPage.noUser')}</h3>
                </div>
                : reviews.some(item => item.reviewId === user.uid) ?
                    <div className='reviews-form mb-3'>
                        <h3 id='reviews'
                            className='text-center mb-3 mt-3 col-md-12'>{t('reviewsPage.haveReviews')}</h3>
                    </div>
                    :
                    <div className='reviews-form mb-3'>
                        <form
                            action=''
                            className='add-form mt-3 pt-3'
                            onSubmit={onSubmit}
                        >
                            <div className='row mb-3'>
                                <label htmlFor='inputName'
                                       className='col-sm-2 col-form0label'>{t('reviewsPage.name')}:</label>
                                <div className='col-sm-10'>
                                    <input type='text' className='form-control' id='inputName'
                                           value={name}
                                           onChange={e => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <label htmlFor='inputName'
                                       className='col-sm-2 col-form0label'>{t('addForm.title')}:</label>
                                <div className='col-sm-10'>
                                    <input type='text' className='form-control' id='inputName'
                                           value={title}
                                           onChange={e => setTitle(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <label htmlFor='inputContent'
                                       className='col-sm-2 col-form0label'>{t('addForm.content')}:</label>
                                <div className='col-sm-10'>
                                    <input type='text' className='form-control' id='inputContent'
                                           value={content}
                                           onChange={e => setContent(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between p-3">
                                <h5>{t('addForm.buttonLabel')}:</h5>
                                <button type="submit"
                                        className="btn btn-success btn-sm">{t('addForm.addButton')}</button>
                            </div>
                        </form>
                    </div>
            }
        </>
    )
}

export default ReviewsForm;