import{useEffect,useState}from'react'
import axios from 'axios'

export function useFetch(url){
    const [data,setData]=useState([])
    const [isFerching,setIsFerching]=useState(true)

    useEffect(()=>{
        axios.get(url)
            .then(resp=>{setData(resp.data)})
            .catch(err=>{console.log(err)})
            .finally(()=>setIsFerching(false))
    },[])

    return{data,isFerching}
}

