import BlockResolver from "./BlockResolver";

const Homepage = ({detail}) => {

    return (
        <>
            <section className={"w-full px-4"}>
                <div className={"max-w-2xl mx-auto py-10 dark:text-slate-100"}>
                    <BlockResolver data={detail.en.data.chapters[0].data}/>
                </div>
            </section>
        </>
    )
}

export default Homepage;