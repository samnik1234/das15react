import { useState, useEffect } from "react"

export const useFetch=(url:string):any=>{
    const [data,setData]=useState<any>();
    useEffect(()=>{
        fetch(url).then(res=>res.json())
        .then(res=>setData(res)).catch(console.warn);
        
    },[])
    return data
}
