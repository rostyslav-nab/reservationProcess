import {SET_PLACE} from "../types"

export const setPlaceAC = (place)=>({
    type: SET_PLACE,
    payload: place
})