import {useRouter} from "next/router";

import {Homepage} from "../templates/homepage"
import Article from "../templates/article"
import {Error404} from "../templates/error";
import Layout from "../templates/@layout";

function Boot({articles}) {

    const router = useRouter();
    let detail = undefined;

    articles.forEach(function (item) {
        if (item.slug === router.asPath) {
            detail = item;
        }
    })

    if (!detail) {
        return (
            <Error404/>
        )
    }


    const path = useRouter().asPath;
    if (detail.template === "homepage") {
        return (
            <Layout key={path} title={detail.title}>
                <Homepage detail={detail}></Homepage>
            </Layout>
        )
    }

    if (detail.template === "article") {
        return (
            <Layout key={path} title={detail.title}>
                <Article detail={detail}></Article>
            </Layout>
        )
    }
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/articles.json`)
    const articles = await res.json()

    // Pass data to the page via props
    return {props: {articles}}
}

export default Boot