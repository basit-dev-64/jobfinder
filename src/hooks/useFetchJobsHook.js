import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (params) => {
    const [Jobdata, setJobData] = useState({jobs:[],loading:true , error:null});
    // const [isLoading ,setLoading] = useState(true)
    const url = `http://localhost:5050/api/naukri?keyword=${params.title}&location=${params.location}`

    useEffect(() => {
        const fetchJoblists = async () => {
            try{
            setJobData({
                jobs: [],
                loading: true,
                error: null
            })
            let jobs = await axios.get(url)
            setJobData({
                jobs: jobs.data.data,
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

    }, [url]);



    return Jobdata;
};

export default useFetch;