import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Accolades from './components/Accolades/Accolades'
import KioskTabs from './components/KioskTabs/KioskTabs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Accolades/>
      <KioskTabs/>
    </>
  )
}

export default App
