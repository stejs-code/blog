import '../styles/globals.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useRouter} from "next/router";
import {AnimatePresence} from "framer-motion";


function MyApp({Component, pageProps}) {
    const url = "stejs.cz" + useRouter().asPath;

    return (
        <div className={"min-h-screen flex flex-col dark:bg-slate-800"}>
            <Header/>
            <main className={"mt-24"}>
                <AnimatePresence
                    exitBeforeEnter
                    initial={false}
                    onExitComplete={() => window.scrollTo(0, 0)}
                >
                    <Component {...pageProps} canonical={url} key={url}/>
                </AnimatePresence>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default MyApp
