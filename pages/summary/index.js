import React from "react"
import {useSelector} from "react-redux"
import dynamic from 'next/dynamic'
import classes from './summary.module.css'
import Button from "@material-ui/core/Button"
import Router from "next/router"

const DynamicComponentWithNoSSR = dynamic(() => import('../../components/Map/Map'), {
    ssr: false
});

const Index = () => {
    const date = useSelector(state => state.checkIn.date)
    const place = useSelector(state => state.place.place)
    const latitude = useSelector(state => state.place.place.geometry.coordinates[1])
    const longitude = useSelector(state => state.place.place.geometry.coordinates[0])

    return (
        <div className={classes.summary}>
            <h2>CheckIn Time: {date.checkIn}</h2>
            <h2>CheckOut Time: {date.checkOut}</h2>
            <hr/>
            <h2>Place: {place.place_name}</h2>
            <div className={classes.map}>
                <DynamicComponentWithNoSSR latitude={latitude} longitude={longitude}/>
            </div>
            <Button variant="contained" color="secondary" onClick={() => Router.push('/')}>
                Go to Start Page
            </Button>
       </div>
    )
}

export default Index