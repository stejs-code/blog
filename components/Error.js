import {useRouter} from "next/router";

const Error404 = () => {
    const router = useRouter();

    return (
        <div className={"mx-auto px-8 mt-16 max-w-4xl"}>
            <h1 className={"text-5xl font-extrabold"}>Nothing to see here</h1>
            <h2 className={"mt-4 text-2xl"}>error 404, page not found</h2>
            <div className={"mt-12  "}>
                <a className={"btn-primary"} href="#" onClick={() => router.back()}>Back to previous page</a>
            </div>
        </div>
    )
}
export {Error404};