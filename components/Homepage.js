const Homepage = ({detail}) => {

    return (
        <>
            <section className={"w-full px-4"}>
                <div className={"max-w-4xl mx-auto py-10"}>
                    {detail.en.data.map((item, index) => {

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
        </>
    )
}

export default Homepage;