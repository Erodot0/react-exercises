import { useParams } from "react-router-dom";
import { GithubUser } from "./components/GithubUser";

export function ShowGithubUser(){
    const {username} = useParams()

    return(
        <GithubUser username={username} />
    )
}