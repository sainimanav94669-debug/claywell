import { useState } from 'react'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Hero from './components/home/Hero'
import Collection from './components/home/Collection'
import FeaturedProducts from './components/home/FeaturedProducts'  
import Delivered from './components/home/Delivered'
import Customers from './components/home/Customers'
import PromoBanner from './components/home/PromoBanner'
 

function App() {
   

  return (
    <>
       <Header/>
       <Hero/>
       <Collection/> 
       <FeaturedProducts/> 
       <PromoBanner/> 
       <Delivered/>
       <Customers/>

       
    </>
  )
}

export default App
