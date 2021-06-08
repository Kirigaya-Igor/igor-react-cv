import React, {useEffect} from 'react';
import './reviews.scss';
import ReviewsForm from "../reviewsForm";
import ReviewsItem from "../reviewsItems";

const Reviews = ({
                     setLoading, getReviews, name, content,
                     reviews, setContent, setName, setTitle, title,
                     user, addReviews, data, loading, onRemove, t
                 }) => {

    useEffect(() => {
        setLoading(true);
        getReviews();
    }, [])

    return (

        <div className='reviews container-fluid mb-5'>

            <div className='row'>
                <h3 id='reviews' className='text-center mb-3 mt-3 col-md-12'>{t('reviewsPage.title')}</h3>
            </div>

            <div className='row reviews-items-block'>
                <div className='col-md-1 col-sm-12'></div>

                <div className='col-md-10 col-sm-12 text-center'>

                    <ReviewsForm
                        name={name}
                        content={content}
                        reviews={reviews}
                        setContent={setContent}
                        setName={setName}
                        setTitle={setTitle}
                        title={title}
                        user={user}
                        addReviews={addReviews}/>

                    <ReviewsItem
                        user={user}
                        reviews={reviews}
                        data={data}
                        loading={loading}
                        onRemove={onRemove}/>

                </div>

                <div className='col-md-1 col-sm-12'></div>
            </div>
        </div>

    )
}

export default Reviews;