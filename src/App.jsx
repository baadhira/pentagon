import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Accolades from './components/Accolades/Accolades'
import KioskTabs from './components/KioskTabs/KioskTabs'
import KioskModeSection from './components/KioskModeSection/KioskModeSection'
import { Carousel } from './components/Carousel/Carousel'
import LogoSlider from './components/LogoSlider/LogoSlider'
import PlatformsSection from './components/PlatformsSection/PlatformsSection'
import SignupSection from './components/PlatformsSection/SignupSection'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Accolades/>
      <KioskTabs/>
      <KioskModeSection/>
      <Carousel/>
      <LogoSlider/>
      <PlatformsSection/>
      <SignupSection/>
      <Footer/>
    </>
  )
}

export default App
