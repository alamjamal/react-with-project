import React from 'react'
const PicShow = (props) => {
    return(
            <>
            <h1>news</h1>
            {props.heading}          
            {props.id}  
          
               <img src={`http://localhost:1337${props.pic}`} alt="" />
          
           </>
            
            )


}

 


export default PicShow

// agar same multiply krna hai to map lga kr all show kra denge
//agar apne mn se to condition kra ke render krayenge