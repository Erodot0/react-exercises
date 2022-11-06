import { useEffect, useState } from "react"

export function GithubUser({username}){
    const [data, setData] = useState("")

    const fetchData = async (username) => {
        const res = await fetch(`https://api.github.com/users/${username}`)
        const resJson = await res.json()
        setData(resJson)
    }
    
    useEffect(() => {
        fetchData(username)
    },[username])



    return(
        <div>
            <div className="fetchContent">
                {data.avatar_url && <a href={data.html_url}><img src={data.avatar_url} alt="userpfp" /></a>}
                <h1>{data.name}</h1>                
            </div>
        </div>
    )
}