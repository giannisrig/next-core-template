import Head from 'next/head';
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer/footer";

export default function Layout({ children }) {

    return (
        <>
            <Head>
                <title>NextJS: Starter Codebase Template</title>
                <meta name="description" content="A demo app built with Next.js" />
            </Head>
            <Header/>
            <main>
                { children }
            </main>
            <Footer/>
        </>
    );

}
