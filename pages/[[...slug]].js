import {MeiliSearch} from "meilisearch";
import {Error404} from "../components/Error";
import Homepage from "../components/Homepage";
import {motion} from "framer-motion";

const client = new MeiliSearch({
    host: 'http://127.0.0.1:7700',
    apiKey: 'susamogus',
})

const variants = {
    hidden: {opacity: 0, scale: 0.9},
    enter: {opacity: 1, scale: 1},
    exit: {opacity: 0, y: -100}
}

const TemplateLoader = ({detail}) => {
    detail = detail[0];
    if (detail === undefined) {
        return <Error404/>
    }
    if (detail.template === "homepage") {
        return <Homepage detail={detail}/>
    }
}

export default function Main({detail}) {
    return (
        <motion.main
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{type: 'linear'}} // Set the transition to linear
            className=""
        >
            <TemplateLoader detail={detail}/>
        </motion.main>
    )


}


export async function getServerSideProps(context) {

    let articles = await client.index('articles')
        .search('', {
            filter: ['slug = "' + context.resolvedUrl + '"']
        })

    const detail = articles.hits;

    return {props: {detail}}
}