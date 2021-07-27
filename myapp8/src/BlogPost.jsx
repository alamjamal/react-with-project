import React, { useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
const BlogPost = () => {
    const [data, setData] = useState([]);
    const {id} =useParams();
    useEffect(() => {
        const fetchData = async () => {
            console.log(id);
            const result = await axios.get(`http://localhost:1337/techandas/${id}`);
            setData( result.data);
            console.log(result.data)
        };
        fetchData();
    },[id]);
    return ( 
        <div>
            <h1>{data.heading}</h1>
        </div>
    )
}

export default BlogPost
