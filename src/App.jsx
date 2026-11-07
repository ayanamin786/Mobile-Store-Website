import { useState , useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import SocialProof from './Components/SocialProofSection'
import LPProducts from './Components/LP-Products'
import Testeminoals from './Components/Testeminoals'
import Footer from './Components/Footer'

function App() {

  useEffect(() => {
    Aos.init({
        duration: 1000,
        once:false

    })
},[])

  return(
    <>
   <Navbar/>
    <Hero/>
    <SocialProof/>
    <LPProducts/>
    <Testeminoals/>
    <Footer/>


    </>
  )
}

export default App
