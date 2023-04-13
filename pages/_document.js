import { Html, Head, Main, NextScript } from 'next/document'
import fonts from '@/helpers/fonts'

export default function Document() {

    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/images/favicon.png" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
