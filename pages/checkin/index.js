import Head from "next/head"
import {DateTimePickerComponent} from "../../components/DateTimePicker/DateTimePicker"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import classes from './checkIn.module.css'

const Index = () => {
    return (
        <div className={classes.checkInPage}>
            <Head>
                <title>Pick the Time</title>
            </Head>
            <h1>Enter CheckIn and CheckOut</h1>
            <Card variant="outlined">
                <CardContent>
                    <DateTimePickerComponent/>
                </CardContent>
            </Card>
        </div>
    )
}

export default Index