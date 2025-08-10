import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"

const App = () => {
  return (
    <div className='min-h-screen w-full'>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App