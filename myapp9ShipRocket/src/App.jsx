import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
    const [mydata, setData] = useState()
       
        useEffect(() => {
            let data = JSON.stringify({"email":"alamjamal888@gmail.com","password":"saniayusuf10"});
            let config = {
                method: 'post',
                url: 'https://apiv2.shiprocket.in/v1/external/auth/login',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data : data
                };
        
                axios(config)
                .then((response) => {
                console.log(JSON.stringify(response.data.token));
                setData(JSON.stringify(response.data.token))
                })
                .catch((error) => {
                console.log(error);
                });
        }, [setData])
        
      
    return (
        <div>
            <h1>{mydata}</h1>
        </div>
    )
}

export default App
