import React from 'react'
import Banner from './Component/Banner'
import Banner2 from './Component/Banner2'
import Banner3 from './Component/Banner3'
import Banner4 from './Component/Banner4'
import Banner5 from './Component/Banner5'
import NewsEvent from './Component/NewsEvent'
import Subscription from './Component/Subscription'
import Footer from './Component/Footer'
import data from './Data'
import NewsEventData from './Component/NewsEventData'
const Home = () => {
    return (
        <>
      <Banner />
      <Banner2 />
      <Banner3 />
      <Banner4 />
      <Banner5 
             head1={data.first.head1} text1={data.first.text1} img1={data.first.img1} 
             head2={data.second.head1} text2={data.second.text1} img2={data.second.img1} 
             head3={data.third.head1} text3={data.third.text1} img3={data.third.img1}  
             head4={data.fourth.head1} text4={data.fourth.text1} img4={data.fourth.img1} 
             
      />
      <NewsEventData/>
      <Subscription />
      <Footer />
        </>
    )
}

export default Home
