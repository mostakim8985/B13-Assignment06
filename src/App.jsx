
import { Suspense } from 'react'
import './App.css'
import Decription from './component/Decription'
import DigiTools from './component/DigiTools/DigiTools'
import Footer from './component/Footer'
import Headline from './component/Headline'
import HeroSection from './component/HeroSection'
import Information from './component/Information'
import Navbar from './component/Navbar'
import PricingCart from './component/PricingCart'
import RatingSection from './component/RatingSection'
import Toggle from './Toggle'



const fetchData = async () => {
  const res = await fetch('/public/data.json')
  return res.json()
}

function App() {
  const fetchInfo = fetchData();


  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <RatingSection></RatingSection>
      <Headline></Headline>
      <Toggle></Toggle>
      <Suspense fallback={
        <div className='flex mt-20 justify-center items-center'>
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      }>

        <DigiTools fetchInfo={fetchInfo}></DigiTools>

      </Suspense>
      <Information></Information>
      <PricingCart></PricingCart>
      <Decription></Decription>
      <Footer></Footer>
    </>
  )
}

export default App
