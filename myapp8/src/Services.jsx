import React from 'react'
import Banner5 from './Component/Banner5'
import data from './Data'

const Services = (props) => {

    return (
        <>
             <Banner5 
             head1={data.first.head1} text1={data.first.text1} img1={data.first.img1} 
             head2={data.second.head1} text2={data.second.text1} img2={data.second.img1} 
             head3={data.third.head1} text3={data.third.text1} img3={data.third.img1}  
             head4={data.five.head1} text4={data.fourth.text1} img4={data.fourth.img1} 
             
             />
        </>
    )
}

export default Services
