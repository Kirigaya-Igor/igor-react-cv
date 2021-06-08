import React, {useState, useEffect, useContext} from 'react';
import AppFooter from "../appFooter";
import AppHeader from "../appHeader";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {firebaseInit} from "../context/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {AlertContext} from "../context/alertContext";
import Reviews from "../reviews";

const url = process.env.REACT_APP_DB_URL;

export const ReviewsPage = () => {

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [user] = useAuthState(firebaseInit.auth());
    const alert = useContext(AlertContext);
    const {t} = useTranslation();

    const addReviews = async () => {
        const item = {
            reviewId: user.uid, name,
            date: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString().slice(0, 5)}`,
            title, content
        }
        try {
            const res = await axios.post(`${url}/reviews.json`, item);
            const newItem = Object.assign({id: res.data.name}, item);
            setReviews([...reviews, newItem]);
            setData(true);
        } catch (error) {
            alert.showAlert(`${error.message}`);
        }
    }

    const getReviews = async () => {
        try {
            const res = await axios.get(`${url}/reviews.json`);
            if (res.data != null) {
                const data = Object.keys(res.data).map(key => {
                    return {
                        ...res.data[key],
                        id: key
                    }
                })
                setReviews(data);
                setData(true);
                setLoading(false);
            } else {
                setLoading(false);
            }
        } catch (error) {
            alert.showAlert(`${error.message}`);
        }
    }

    const onRemove = async (id) => {
        try {
            await axios.delete(`${url}/reviews/${id}.json`);
            const newData = [...reviews].filter((item => item.reviewId !== user.uid));
            setReviews(newData);
            if (newData.length === 0) {
                setData(false);
            }
        } catch (error) {
            alert.showAlert(`${error.message}`);
        }
    }

    useEffect(() => {
        setLoading(true);
        getReviews();
    }, [])

    return (
        <>
            <AppHeader/>

            <Reviews name={name} onRemove={onRemove} loading={loading} data={data} reviews={reviews}
                     user={user} addReviews={addReviews} title={title} setTitle={setTitle} setName={setName}
                     setContent={setContent} content={content} getReviews={getReviews} setLoading={setLoading} t={t}/>

            <AppFooter/>
        </>
    )
}