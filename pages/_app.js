import App from 'next/app'
import React from 'react'
import {Provider} from "react-redux";
import store from "../redux/store"
import {createWrapper} from "next-redux-wrapper";

class MyApp extends App {


    render() {
        //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
        const {Component, pageProps} = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        );
    }
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)