import Link from "next/link";


const Header = () => {
    return (
        <>
            <nav className={"w-full border-b-2 border-slate-200 py-6 px-8 bg-white fixed dark:border-slate-700 dark:bg-slate-800 z-50"}>
                <div className={"flex max-w-6xl mx-auto justify-between items-end"}>
                    <div>
                        <Link href={"/"} scroll={false}>
                            <a className={"text-5xl font-black dark:text-slate-100"}><span
                                className={"text-violet-600"}>stejs</span>.</a>
                        </Link>
                    </div>
                    <div>
                        <ul className={"flex space-x-16 text-xl font-medium text-slate-900 dark:text-slate-100"}>
                            <li>
                                <Link href={"/"} scroll={false}>
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                //TODO: load from api
                                <Link href="/about-me" >
                                    <a>About me</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" scroll={false}>
                                    <a>Blog</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Header