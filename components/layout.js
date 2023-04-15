import styles from "@/styles/components/Layout.module.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({ children }) {

    return (
        <>
            <Header/>
            <main>
                { children }
            </main>
            <Footer/>
        </>
    );

}
