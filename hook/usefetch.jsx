import React, { useEffect, useState } from 'react';


export default function usefetch() {
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);
        const [data, setData] = useState(null);


        const getData = async ()=>{
            try {
                setLoading(true);
                const data0 = await fetch("https://jsonplaceholder.typicode.com/posts");
                const responce = await data0.json();
                setData(responce);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        
        }

    useEffect(() => {
        getData();
    }, [])
    return {data , loading  , error}

}
