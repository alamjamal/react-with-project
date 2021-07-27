import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PicShow from './PicShow'
function App() {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:1337/techandas`);
            setData( result.data);
            // console.log(result.data)
        };
        fetchData();
    },[]);
   
    return (
        <>
            <h1>
                {data.map((item, index) => {
                   
                       
                        return <PicShow pic={item.pic.url} key={index} id={item.id} heading={item.heading} />
                   
                })}
            </h1>
        </>
    );
}
export default App
