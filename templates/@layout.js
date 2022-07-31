import Head from 'next/head'
import Link from "next/link";
import {motion} from 'framer-motion'
import {useRouter} from "next/router";

const variants = {
    hidden: {opacity: 0, x: -200, y: 0},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: -100},
}

const Layout = ({title, children}) =>  {
    const path = useRouter().asPath;
    return (
        <>
            <Head>
                <title>{title}</title>

            </Head>


            <div>

                <motion.main
                    key={"motion-" + path}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{type: 'linear'}}
                    className="mt-48 w-full">
                    {children}

                    <div className={"h-96 bg-amber-800"}></div>
                    <div className={"h-96 bg-amber-800"}></div>
                    <div className={"h-96 bg-amber-800"}></div>
                    <div className={"h-96 bg-amber-800"}></div>
                    <div className={"h-96 bg-amber-800"}></div>

                </motion.main>
            </div>
        </>
    )
}

export default Layout;