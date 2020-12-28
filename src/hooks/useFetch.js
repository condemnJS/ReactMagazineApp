import {useState, useCallback} from 'react'

export const useFetch = (params)=>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(params);
    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type':'applications/json'}) =>{
        setLoading(true);
        try{
            const response = await fetch(url, {
                method,
                headers,
                body: JSON.stringify(body)
            })
            const data = await response.json();
            if(data.code === 422){
                setError(data.body);
            }
            setLoading(false);
            return data;
        }catch (e){
            console.log(e);
            setLoading(false);
            setError(e.message)
            throw e;
        }
    }, [])
    return {loading, request, error}
}