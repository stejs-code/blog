export function Boot({ pages }) {
    return (
        <ul>
            {JSON.stringify(pages)}
        </ul>
    )
}

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:3000/articles.json')
    const pages = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            pages
        },
    }
}
