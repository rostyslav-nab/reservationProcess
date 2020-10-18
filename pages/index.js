import Head from 'next/head'
import Router from "next/router"
import CssBaseline from '@material-ui/core/CssBaseline'
import Button from "@material-ui/core/Button"
import React from "react"
import {makeStyles, createMuiTheme, ThemeProvider} from "@material-ui/core/styles"
import blue from "@material-ui/core/colors/blue"

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});


const Index = () => {
    const classes = useStyles();

    return (
        <div>
            <Head>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <meta name="description" content="3 steps reservation process"/>
                <meta name="keywords" content="reservation, next, test work"/>
                <meta charSet="utf-8"/>
                <link href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css" rel="stylesheet"/>
                <title>Welcome</title>
            </Head>
            <CssBaseline/>
            <h1 style={{color: 'white', textAlign: 'center', margin: '100px'}}>Hi, Welcome to our website, take 3 easy
                steps to book</h1>
            <ThemeProvider theme={theme}>
                <Button style={{margin: '0 auto', display: 'block'}} className={classes.margin} variant="contained" size="large" color="primary"
                        onClick={() => Router.push('/checkin')}>Start</Button>
            </ThemeProvider>
        </div>
    )
}

export default Index