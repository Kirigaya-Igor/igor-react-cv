import React, {useReducer, useContext} from 'react';
import axios from "axios";
import {FirebaseContext, firebaseInit, FirebaseReducer} from "../firebase";
import {ADD_ITEM, FETCH_ITEMS, REMOVE_ITEMS, SHOW_LOADER} from "../actions";
import {AlertContext} from "../alertContext";
import {useAuthState} from "react-firebase-hooks/auth";

const url = process.env.REACT_APP_DB_URL;

export const FirebaseState = ({children}) => {

    const initialState = {
        items: {
            personalData: [],
            education: [],
            experience: [],
            otherInformation: []
        },
        loading: false
    }

    const [state, dispatch] = useReducer(FirebaseReducer, initialState);
    const alert = useContext(AlertContext);
    const [user] = useAuthState(firebaseInit.auth());

    const showLoader = () => {
        dispatch({type: SHOW_LOADER})
    };

    const fetchItems = async (tableName, lang) => {

        showLoader();

        try {
            const res = await axios.get(`${url}/${lang}/${tableName}.json`);

            if (res.data != null) {
                const payload = {
                    data: Object.keys(res.data).map(key => {
                        return {
                            ...res.data[key],
                            id: key
                        }
                    }),
                    tableName
                }

                dispatch({type: FETCH_ITEMS, payload})
            }

        } catch (error) {
            alert.showAlert(`${error.message}`);
        }
    }

    const addItem = async (title, content, tableName, lang) => {

        try {
            const item = {
                reviewId: user.uid,
                title,
                content
            };

            const res = await axios.post(`${url}/${lang}/${tableName}.json`, item);

            const payload = {
                data: {...item, id: res.data.name},
                tableName
            }

            dispatch({type: ADD_ITEM, payload})

        } catch (error) {
            alert.showAlert(`${error.message}`);
        }
    }

    const removeItem = async (id, tableName, lang) => {

        try {
            await axios.delete(`${url}/${lang}/${tableName}/${id}.json`);

            const payload = {
                id,
                tableName
            }
            dispatch({type: REMOVE_ITEMS, payload})

        } catch (error) {
            alert.showAlert(`${error.message}`);
        }
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader,
            fetchItems,
            addItem,
            removeItem,
            // noData,
            loading: state.loading,
            items: state.items,
            dbEmpty: state.dbEmpty
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}