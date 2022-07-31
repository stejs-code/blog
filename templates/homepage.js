import {AnimatePresence, motion} from "framer-motion";
import Head from "next/head";

// const variants = {
//     hidden: {opacity: 0, x: -200, y: 0},
//     enter: {opacity: 1, x: 0, y: 0},
//     exit: {opacity: 0, x: 0, y: -100},
// }

export const Homepage = ({detail}) => {
    return (
        <>

            <Head>
                <title>{detail.title}</title>

            </Head>

            {/*<AnimatePresence*/}
            {/*    exitBeforeEnter*/}
            {/*    initial={false}*/}
            {/*    onExitComplete={() => window.scrollTo(0, 0)}*/}
            {/*>*/}
            {/*    <motion.main*/}
            {/*        key={detail.id}*/}
            {/*        initial="hidden"*/}
            {/*        animate="enter"*/}
            {/*        exit="exit"*/}
            {/*        variants={variants}*/}
            {/*        transition={{type: 'linear'}}*/}
            {/*        className="mt-48 w-full">*/}


                    <section className={"max-w-3xl mx-auto "}>
                        <div className={"mx-4"}>
                            {detail.data.map((item, index) => {

                                if (item.type === "header") {
                                    return <h1 key={index}
                                               className={"text-4xl mb-4 font-extrabold"}>{item.data.text}</h1>
                                }
                                if (item.type === "paragraph") {
                                    return <p key={index} className={"text-md mb-4"}>{item.data.text}</p>
                                }
                                if (item.type === "delimiter") {
                                    return <hr key={index} className={"my-6 mx-2 border-slate-300"}/>
                                }

                            })}
                        </div>
                    </section>

                    <div className={"h-96 bg-amber-800"}></div>
                    <div className={"h-96 bg-amber-800"}></div>
                    <div className={"h-96 bg-amber-800"}></div>
                    <div className={"h-96 bg-amber-800"}></div>
                    <div className={"h-96 bg-amber-800"}></div>

            {/*    </motion.main>*/}

            {/*</AnimatePresence>*/}
        </>
    )
}
