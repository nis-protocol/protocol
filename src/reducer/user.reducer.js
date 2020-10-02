import { actionType as type } from '../action';

const initialState = {
    dataMetamask: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.USER.METAMASK.GET_DATA:
            return {
                ...state,
                dataMetamask: action.dataMetamask
            }
        default:
            return state;
    }
}

export default userReducer;