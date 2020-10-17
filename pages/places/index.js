import Router from "next/router"
import Button from "@material-ui/core/Button"
import Map from "../../components/Map/Map"
import React, {useState} from "react"
import Grid from "@material-ui/core/Grid"
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import classes from './places.module.css'
import {useDispatch} from "react-redux";
import {setPlaceAC} from "../../redux/actions/placeAction";


export default function Index() {
    const [place, setPlace] = useState(null)
    const dispatch = useDispatch()

    const handleSelect = (place) => {
        setPlace(place)
        console.log(place)
        dispatch(setPlaceAC(place))
    }
    return (
        <div>
            <Card variant="outlined" className={classes.placesPage}>
                <CardContent className={classes.map} >
                    <Map onSelect={handleSelect}/>
                    {!place && <div>No place selected</div>}
                </CardContent>
                <CardActions className={classes.nextButton}>
                    <Button variant="contained" color="secondary" onClick={() => Router.push('/summary')}>Finish</Button>
                </CardActions>
            </Card>
        </div>
    )
}