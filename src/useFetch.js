import {useEffect, useState} from "react";

const useFetch = (url) => {
    // eslint-disable-next-line
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url).then(res => {
            if(!res.ok){
                throw Error("could not fetch the data for that resource")
            }
            return res.json()
        })
            .then(data => {
                setData(data)
                setIsPending(false)
            })
            .catch(err => {
                setError(err.message)
            })
    }, [url])
    return {data, isPending, error}

}

export default useFetch