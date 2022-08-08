import '../styles/globals.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useRouter} from "next/router";
import {AnimatePresence} from "framer-motion";
import {MeiliSearch} from "meilisearch";

const client = new MeiliSearch({
    host: 'http://127.0.0.1:7700',
    apiKey: 'susamogus',
})

function MyApp({Component, pageProps, menu}) {
    const path = useRouter().asPath;

    return (
        <div className={"min-h-screen flex flex-col dark:bg-slate-800"}>
            <Header menu={menu}/>

            <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <Component {...pageProps} canonical={path} key={path}/>
            </AnimatePresence>

            <Footer></Footer>
        </div>
    )
}

MyApp.getInitialProps = async () => {
    let menu = (await client.index('router')
        .search('', {
            filter: ['menu = true']
        })).hits

    return {menu}
}

export default MyApp
