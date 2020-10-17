import Router from "next/router"
import Button from "@material-ui/core/Button"
import Head from "next/head"
import {DateTimePickerComponent} from "../../components/DateTimePicker/DateTimePicker"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"

export default function Index() {
    return (
        <>
            <Head>
                <title>Pick thr Time</title>
            </Head>
            <h1>CheckIN</h1>
            <Card variant="outlined">
                <CardContent>
                    <DateTimePickerComponent/>
                </CardContent>
            </Card>


        </>
    )
}