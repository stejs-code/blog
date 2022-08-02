import {DiscordFill, GithubFill, InstagramFill} from "akar-icons";

const Footer = () => {
    return (
        <div className={"w-full border-t-2 border-slate-200 dark:border-slate-700 mt-auto py-12"}>
            <div className={"w-full max-w-4xl mx-auto text-slate-800  dark:text-slate-200"}>
                <div className={"flex justify-center gap-12"}>
                    <GithubFill strokeWidth={2.5} size={30}/>
                    <InstagramFill strokeWidth={2.5} size={30}/>
                    <DiscordFill strokeWidth={2.5} size={30}/>
                </div>
                <div className={"flex justify-center mt-4"}>
                    <p className={""}>Created with Next.js by stejs. </p>
                </div>
            </div>
        </div>
    )
}
export default Footer;