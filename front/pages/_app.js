import React from 'react';
import AppLayout from "../components/AppLayout";
import PropTypes from 'prop-types';
import Head from "next/head";
import { Provider } from 'mobx-react';
import { initializeStore } from '../stores/RootStore';

const store = new initializeStore;

const NodeBird = ({Component, pageProps})=>{
    return(
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <Provider store={store}>
                <AppLayout>
                    <Component {...pageProps}/>
                </AppLayout>
            </Provider>
        </>
    )
}

NodeBird.getInitialProps = async(context)=>{
    console.log(context);
    const {ctx,Component} = context;
    ctx.store= store;
    let pageProps = {};
    if(Component.getInitialProps){
        pageProps = await Component.getInitialProps(ctx);
    }
    return {pageProps};
}

NodeBird.propTypes ={
    Component : PropTypes.elementType.isRequired,// jsx 에 들어갈 수 있는 모든 것을 node라고 한다. 
    pageProps : PropTypes.object.isRequired
}

export default NodeBird;