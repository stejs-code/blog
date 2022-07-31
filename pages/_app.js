import '../styles/globals.css'
import Head from "next/head";
import Link from "next/link";
import {AnimatePresence} from "framer-motion";

import {StrictMode} from "react";


const variants = {
    hidden: {opacity: 0, x: -200, y: 0},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: -100},
}

function MyApp({Component, pageProps}) {
    return <>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <nav className={"w-full bg-white border-b-2 border-slate-200 p-8 flex overflow-auto fixed top-0"}>
            <div className={"flex w-full max-w-5xl mx-auto"}>
                <div>
                    <Link href="/">
                        <a className={"text-5xl font-extrabold text-indigo-700"}>Blog<span
                            className={"text-slate-800"}>.</span></a>
                    </Link>
                </div>

                <div className={"ml-auto flex items-end"}>
                    <ul className={"flex gap-8"}>

                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-me">
                                <a>About me</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>Blog</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <StrictMode>
            <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >

                <Component {...pageProps}/>


            </AnimatePresence>
        </StrictMode>
    </>
}

export default MyApp
