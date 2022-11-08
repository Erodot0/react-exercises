import { useGithubUser } from "./useGithubUser"

export function GithubUser({username}){
    const { data } = useGithubUser(username)

    return(
        <div>
            <div className="fetchContent">
                {data.avatar_url && <a href={data.html_url}><img src={data.avatar_url} alt="userpfp" /></a>}
                <h1>{data.name}</h1>                
            </div>
        </div>
    )
}