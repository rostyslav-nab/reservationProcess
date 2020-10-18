import {SET_DATE} from "../types"

const initialState = {
    date: {}
}

export const checkinReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATE:
            return {
                ...state,
                date: {...action.payload}
            }
        default:
            return state
    }
};

export default checkinReducer