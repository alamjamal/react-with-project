import React , {useEffect, useState} from 'react'
import NewsEvent from './NewsEvent';
import axios from 'axios'


const NewsEventData = () => {
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
        <section className="news-section home-16">
        <div className="pattern-bg">
            <div className="pattern-1 wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms" style={{backgroundImage: "url(images/icons/pattern-31.png)"}}></div>
            <div className="pattern-2 wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms" style={{backgroundImage: "url(images/icons/pattern-32.png)"}}></div>
        </div>
        <div className="container">
            <div className="sec-title center">
                <h2>News & Events</h2>
            </div>
            <div className="row">
            {data.reverse().slice(0,3).map((item) => {
                console.log(data);
                const cleanedDate = new Date(item.published_at).toDateString();
                   return <NewsEvent pic={item.pic.url}  key={item.id} heading={item.heading} published_at={cleanedDate} id={item.id}/>
           })}
            </div>
        </div>
    </section>
    </>
    )
}

export default NewsEventData
