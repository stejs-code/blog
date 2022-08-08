import {MeiliSearch} from "meilisearch";
import {Error404} from "../components/Error";
import Homepage from "../components/Homepage";
import {motion} from "framer-motion";
import {Custom} from "../components/custom/Amogus";

const client = new MeiliSearch({
    host: 'http://127.0.0.1:7700',
    apiKey: 'susamogus',
})

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const variants = {
    hidden: {opacity: 0, scale: 0.9},
    enter: {opacity: 1, scale: 1},
    exit: {opacity: 0, y: -100}
}

const TemplateLoader = ({data}) => {

    if (data.error) {
        if (data.code === 404) {
            return <Error404/>
        }
    }

    if (data.type === "article") {
        const detail = data.article;

        if (detail.template === "homepage") {
            return <Homepage detail={detail}/>
        }


        // var Components = [
        //     <Custom></Custom>,
        //
        // ]
        //
        // var Component = capitalizeFirstLetter(data.article.template);
        // return React.createElement(Component, {detail});
    }

    if (data.type === "custom") {
        console.log(data.target.charAt(0).toUpperCase() + data.target.slice(1));

        import("../components/custom/" + data.target.charAt(0).toUpperCase() + data.target.slice(1))

        return <Custom/>
    }
}

export default function Main({data}) {
    return (
        <motion.main
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{type: 'linear'}} // Set the transition to linear
            className={"mt-24"}
        >
            <TemplateLoader data={data}/>
        </motion.main>
    )


}


export async function getServerSideProps(context) {

    let data;

    let routeDocument = await client.index('router')
        .search('', {
            filter: ['slug = "' + context.resolvedUrl + '"']
        });
    if (routeDocument.hits[0] !== undefined) {
        routeDocument = routeDocument.hits[0];

        if (routeDocument.type === "article") {
            const article = await client
                .index('articles')
                .getDocument(routeDocument.target_id)

            data = {
                type: "article",
                article
            }

            return {props: {data}}
        }
        if (routeDocument.type === "custom") {
            data = {
                type: "custom",
                target: routeDocument.target_id
            }

            return {props: {data}}
        }
    }

    data = {
        error: true,
        code: 404
    }

    return {props: {data}}
}