import {ADD_ITEM, FETCH_ITEMS, REMOVE_ITEMS, SHOW_LOADER} from "../actions";

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),

    [ADD_ITEM]: (state, {payload}) => ({
        ...state,
        items: {...state.items, [payload.tableName]: [...state.items[payload.tableName], payload.data]}
    }),

    [FETCH_ITEMS]: (state, {payload}) => ({
        ...state,
        items: {...state.items, [payload.tableName]: payload.data},
        loading: false}),

    [REMOVE_ITEMS]: (state, {payload}) => {
        return (
            {
                ...state,
                items: {
                    ...state.items,
                    [payload.tableName]: state.items[payload.tableName].filter(item => item.id !== payload.id)
                }
            }
        )
    },

    DEFAULT: state => state
}

export const FirebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}