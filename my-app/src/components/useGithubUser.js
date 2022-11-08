import { useEffect, useState } from "react"

export function useGithubUser(username){
    const [data, setData] = useState("")

    const fetchData = async (username) => {
        const res = await fetch(`https://api.github.com/users/${username}`)
        const resJson = await res.json()
        setData(resJson)
    }
    
    useEffect(() => {
        fetchData(username)
    },[username])

    return {
        data: data,
        fetchData: fetchData,
    }
}