// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect} from "react";


const useFetch = (url) => {
    const [data, setData] = useState (null);

    useEffect(() => {
     
        fetch(url)

        .then(res => {
            return res.json();
        })
        .then(data => {
            
            setData(data);
        })
    },[url]);

    return{data}
}

export default useFetch;