import { useState } from "react"

export function GithubUser({username = "erodoto"}){
    const [data, setData] = useState("")

    const fetchData = async () => {
        const res = await fetch(`https://api.github.com/users/${username}`)
        const resJson = await res.json()
        setData(resJson)
    }
    
    console.log(data)

    return(
        <div>
            <button onClick={fetchData}>fetch</button>
            <div className="fetchContent">
                {data.avatar_url && <a href={data.html_url}><img src={data.avatar_url} alt="userpfp" /></a>}
                <h1>{data.name}</h1>
                
            </div>
        </div>
    )
}