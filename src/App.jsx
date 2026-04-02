
import { Suspense, useState } from 'react'
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
import Toggle from './component/Toggle'
import Cart from './component/DigiTools/Cart'




const fetchData = async () => {
  const res = await fetch('/public/data.json')
  return res.json()
}
const fetchInfo = fetchData();
function App() {

  const [toggle, setToggle] = useState('products');
  const [cart, setCart] = useState([])




  return (
    <>
      <Navbar cart={cart}></Navbar>
      <HeroSection></HeroSection>
      <RatingSection></RatingSection>
      <Headline></Headline>
      <Toggle toggle={toggle} cart= {cart} setToggle={setToggle}></Toggle>



      {
        toggle === 'products' && <DigiTools
          fetchInfo={fetchInfo}
          cart={cart}
          setCart={setCart}
        ></DigiTools>

      }

      {
        toggle === 'cart' &&

        <Cart cart={cart}></Cart>
      }



      <Information></Information>
      <PricingCart></PricingCart>
      <Decription></Decription>
      <Footer></Footer>
    </>
  )
}

export default App
