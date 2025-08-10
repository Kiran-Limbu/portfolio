import React from 'react'
import LandingPage from './LandingPage'
import DeatilsPage from './DeatilsPage'
import AboutPanel from '../components/aboutpanel/AboutPanel'

const MainPage = () => {
  return (
    <div>
      <LandingPage />
      <DeatilsPage />
      <AboutPanel />
    </div>
  )
}

export default MainPage
