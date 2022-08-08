const BlockResolver = ({data}) => {


    var stringToHTML = function (str) {
        var DomParser = require('dom-parser');
        var parser = new DomParser();

        var dom = parser.parseFromString(str);

        return (
            <>
                {dom.rawHTML}
            </>
        )
    };

    return (
        <>
            {data.map((block, index) => {

                if (block.type === "header") {
                    if (block.data.level === 1) {
                        return <h1 key={index}
                                   className={"edjs-block text-4xl mb-4 font-extrabold"} dangerouslySetInnerHTML={{__html: block.data.text}}></h1>
                    }
                    if (block.data.level === 2) {
                        return <h2 key={index}
                                   className={"edjs-block text-3xl mb-4 font-extrabold"} dangerouslySetInnerHTML={{__html: block.data.text}}></h2>
                    }
                    if (block.data.level === 3) {
                        return <h3 key={index}
                                   className={"edjs-block text-2xl mb-4 mt-10 font-extrabold"} dangerouslySetInnerHTML={{__html: block.data.text}}></h3>
                    }
                }
                if (block.type === "paragraph") {
                    return <p key={index} className={"edjs-block text-md mb-4"} dangerouslySetInnerHTML={{__html: block.data.text}}></p>
                }
                if (block.type === "list") {
                    if (block.data.style === "unordered") {
                        return (
                            <ul className={"list-disc mb-8"} key={index}>
                                {block.data.items.map((item, index) => {
                                    return (
                                        <li className={"edjs-block"} key={block.id + "-" + index} dangerouslySetInnerHTML={{__html: item}}></li>
                                    )
                                })}
                            </ul>
                        )
                    }
                }
                if (block.type === "delimiter") {
                    return <hr key={index} className={"my-6 mx-2 border-slate-300"}/>
                }

            })}
        </>
    )
}

export default BlockResolver;