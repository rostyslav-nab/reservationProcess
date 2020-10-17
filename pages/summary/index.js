import React from "react"
import {useSelector} from "react-redux"
import dynamic from 'next/dynamic'
import classes from './summary.module.css'

const DynamicComponentWithNoSSR = dynamic(() => import('../../components/Map/Map'), {
    ssr: false
});

const Index = () => {
    const date = useSelector(state => state.checkIn.date)
    const place = useSelector(state => state.place.place)
    console.log(date)
    return(
        <div className={classes.summary}>
            <h2>CheckIn Time: {date.checkIn}</h2>
            <h2>CheckOut Time: {date.checkOut}</h2>
            <hr/>
            <h2>Place: {place.place_name}</h2>
            <div className={classes.map}>
                <DynamicComponentWithNoSSR />
            </div>

       </div>
    )
}

export default Index