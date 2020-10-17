import {SET_PLACE} from "../types"

const initialState = {
    place: {}
}

export const placeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLACE:
            return {
                ...state,
                place: {...action.payload}
            }
        default:
            return state
    }
};

export default placeReducer