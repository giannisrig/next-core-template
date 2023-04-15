import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { GoogleAnalytics } from "nextjs-google-analytics";
import '@/styles/globals.scss'
import { Provider } from 'react-redux';
import { wrapper } from '@/store/store';
import fonts from '@/helpers/fonts'

export default function App({ Component, ...rest }) {

    const router = useRouter()

    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;

    useEffect(() => {

    }, [router.events])

    return (
        <Provider store={store}>
            <GoogleAnalytics trackPageViews />
            <div className={`${fonts.notoSansMono.variable} ${fonts.grava.variable} font-primary`}>
                <Component {...pageProps} />
            </div>
        </Provider>
    );
}
