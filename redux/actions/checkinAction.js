import {SET_DATE} from "../types";

export const setDateTime = (date)=>({
    type: SET_DATE,
    payload: date
})