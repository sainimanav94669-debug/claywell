import { useState } from 'react'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Hero from './components/home/Hero'
import Collection from './components/home/Collection'
import FeaturedProducts from './components/home/FeaturedProducts'
 

function App() {
   

  return (
    <>
       <Header/>
       <Hero/>
       <Collection/> 
       <FeaturedProducts/>

       
    </>
  )
}

export default App
