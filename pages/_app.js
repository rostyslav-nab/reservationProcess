import App from 'next/app'
import React from 'react'
import {Provider} from "react-redux"
import store from "../redux/store"
import {createWrapper} from "next-redux-wrapper"

class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props
        return (
            <Provider store={store}>
                <Component {...pageProps}/>
                <style jsx global >{`
                body{
                    margin: 0;
                    padding: 0;
                    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,89,9,1) 43%, rgba(0,212,255,1) 100%)!important;
                    height: 100%;
                    
                }
                .MuiCard-root{
                    max-width: 300px;
                    margin: 0 auto!important;
                }
                
                `}</style>
            </Provider>
        );
    }
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)