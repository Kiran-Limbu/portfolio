import Footer from '../components/footer/footer'
import UserInputForm from '../components/inputform/UserInputForm'
import Tooltip from '../components/tooltip/Tooltip'

const FooterPage = () => {
  return (
    <div className='w-full h-screen'>
        <div className="flex md:flex-row flex-col items-center justify-center px-7 w-full">
        <div className="md:w-1/2 w-full">
        <Tooltip />
        </div>
        <div className="md:w-1/2 w-full pt-7">
        <UserInputForm />
        </div>
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
  )
}

export default FooterPage
