import React from "react"
import {useSelector} from "react-redux";

import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('../../components/Map/Map'), {
    ssr: false
});

export default function Index() {
    const date = useSelector(state => state.checkIn.date)
    const place = useSelector(state => state.place.place)
    console.log(date)
    return(
        <>
            <p>CheckIn: {date.checkIn}</p>
            <p>CheckOut: {date.checkOut}</p>
            <hr/>
            <p>Place: {place.place_name}</p>
            <DynamicComponentWithNoSSR />
       </>
    )
}