import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Bannner'


import ProductCarousel from './components/ProductCarousel'
import ComparisonTable from './components/Comparison'
import ProductComparison from './components/Comparison'
import BotanicalBouquet from './components/ProductBreakdown'
import CustomerReviews from './components/CustomerReviews'
import StayInTouch from './components/StayInTouch'
import EverydayWonders from './components/EverydayWonders'
import ImageSlider from './components/EverydayWonders'
import Footer from './components/Footer'

import ProductBreakdown from './components/ProductBreakdown'
import Navbar2 from './components/Navbar2'
import Hero2 from './components/Hero2'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <Banner/>
 <Navbar2/>
 <Hero2/>
 <ProductCarousel/>
<ProductComparison/>
<ProductBreakdown/>
<CustomerReviews/>
<StayInTouch/>
<ImageSlider/>
<Footer/>
 </>
  )
}

export default App
