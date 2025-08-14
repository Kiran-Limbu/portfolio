import LandingPage from './LandingPage'
import AboutPanel from '../components/aboutpanel/AboutPanel'
import ProjectDetailsPage from './ProjectDetailsPage'
import FooterPage from './FooterPage'

const MainPage = () => {
  return (
    <div>
      <LandingPage />
      <AboutPanel />
      <ProjectDetailsPage />
      <FooterPage />
    </div>
  )
}

export default MainPage
