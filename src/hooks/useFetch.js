import React ,{useState,useEffect} from 'react'
import yelp from "../api/yelp"

export const useFetch=(props)=> {
    const {search} = props
    const [data,setData] = useState([]);
    const [isError,setIsError] = useState(false)
    const [isLoading,setIsLoading]=useState(true)
    const onSubmit= async(search)=>{
        setIsLoading(true)
        try {
       const response = await yelp.get("/search",{
            params:{
                term:search,
                limit:50,
                location:"san jose"
            }
        })
        setData(response.data.businesses)
        setIsError(false)
        setIsLoading(false)
    } catch (err){
        setIsError(true)
        setIsLoading(false)
    }
    }
    useEffect(()=>{
        onSubmit(search)
    },[search])
  return {data,isError,onSubmit,isLoading}
}
