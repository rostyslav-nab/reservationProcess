import Head from 'next/head'
import Router from "next/router"
import CssBaseline from '@material-ui/core/CssBaseline'
import Button from "@material-ui/core/Button"
import React from "react";


export default function Index() {

    return (
        <div>
            <Head>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <meta name="description" content="3 steps reservation process"/>
                <meta name="keywords" content="reservation, next, test work" />
                <meta charSet="utf-8"/>
                <title>Welcome</title>
            </Head>
            <CssBaseline/>
            <Button variant="contained" size="large" color="secondary" onClick={() => Router.push('/checkin')}>Start</Button>
        </div>
    )
}