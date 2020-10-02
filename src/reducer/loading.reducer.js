import { actionType as type } from '../action';

const initialState = {
    loading: false
}

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        // loading
        case type.LOADING.SHOW_LOADING:
            return {
                ...state,
                loading: true
            }
        case type.LOADING.HIDE_LOADING:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default loadingReducer;