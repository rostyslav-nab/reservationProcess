import Router from "next/router"
import Button from "@material-ui/core/Button"
import SelectPlace from "../../components/SelectPlace/SelectPlace"
import React, {useState} from "react"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Card from "@material-ui/core/Card"
import classes from './places.module.css'
import {useDispatch} from "react-redux"
import {setPlaceAC} from "../../redux/actions/placeAction"


const Index = () => {
    const [place, setPlace] = useState(null)
    const dispatch = useDispatch()

    const handleSelect = (place) => {
        setPlace(place)
        console.log(place)
        dispatch(setPlaceAC(place))
    }
    return (
        <div className={classes.placesPage}>
            <h1 style={{color: 'white', textAlign: 'center'}}>Select a place to book</h1>
            <Card variant="outlined">
                <CardContent>
                    <SelectPlace onSelect={handleSelect}/>
                    {!place && <div style={{marginTop: '10px'}}>No place selected</div>}
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="secondary" onClick={() => Router.push('/summary')}>Finish</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Index