import { useState } from 'react'
import Header from './components/common/Header'
import Hero from './components/home/Hero'
import Collection from './components/home/Collection'
import FeaturedProducts from './components/home/FeaturedProducts'  
import Delivered from './components/home/Delivered'
import Customers from './components/home/Customers'
import PromoBanner from './components/home/PromoBanner'
import Footer, { FOOTER_LINKS } from './components/common/Footer'
 

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
       <Footer/>

       
    </>
  )
}

export default App
