import React, {useState} from 'react';
import './rating.scss';

const Rating = () => {

    const [clicked, setClicked] = useState([false, false, false, false, false]);

    const handleStarClick = (e, index) => {
        e.preventDefault();
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
            if (i <= index) clickStates[i] = true;
            else clickStates[i] = false;
        }

        setClicked(clickStates);
    };

    return(
        <div className="rating-area">
            <input type="radio" id="star-1" name="rating" value="1"/>
            <label htmlFor="star-1" title="Оценка «5»"></label>

            <input type="radio" id="star-2" name="rating" value="2"/>
            <label htmlFor="star-2" title="Оценка «4»"></label>

            <input type="radio" id="star-3" name="rating" value="3"/>
            <label htmlFor="star-3" title="Оценка «3»"></label>

            <input type="radio" id="star-4" name="rating" value="4"/>
            <label htmlFor="star-4" title="Оценка «2»"></label>

            <input type="radio" id="star-5" name="rating" value="5"/>
            <label htmlFor="star-5" title="Оценка «1»"></label>
        </div>
    )
}

export default Rating;