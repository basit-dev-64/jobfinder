import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (params) => {
    const [Jobdata, setJobData] = useState({jobs:[],loading:true , error:null});
    // const [isLoading ,setLoading] = useState(true)
   // const url = `http://localhost:5050/api/naukri?keyword=${params.title}&location=${params.location}`
    const url = 'https://jooble.org/api/c90c6789-7745-40fd-9ae7-834ee27c140e'

    useEffect(() => {
        const fetchJoblists = async () => {
            try{
            setJobData({
                jobs: [],
                loading: true,
                error: null
            })
            let jobs = await axios.post(url,{
                keywords: params.keywords,
                location: params.location || "India"
              })
            setJobData({
                jobs: jobs.data.jobs,
                loading: false,
                error: null
            })
            } catch (error){
                setJobData({
                    jobs:[],
                    loading:null,
                    error:"Oops ! Something went wrong .."
                })
            }
            
        }
        fetchJoblists();

    }, [params]);



    return Jobdata;
};

export default useFetch;