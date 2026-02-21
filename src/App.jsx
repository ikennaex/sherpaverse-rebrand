import './App.css'
import Navbar from './Components/Navbar'
// import TourismNavbar from './Tourism/components/Navbar'
import Homepage from './Pages/Homepage/Homepage'
import { Routes, Route, useLocation } from "react-router-dom"
import Whoarewepage from './Pages/Homepage/Whoarewepage'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Whychooseuspage from './Pages/Homepage/Whychooseuspage'
import Blog from './Pages/Homepage/Blog'
import TourismHomepage from './Pages/Tourism/pages/Homepage'
import TourismNavbar from './Pages/Tourism/components/Navbar'
import ScrollToTop from './Pages/Tourism/components/ScrollToTop'
import TourismAbout from './Pages/Tourism/pages/About'
import OurWorkPage from './Pages/Tourism/pages/OurWorkPage'
import PartnerWithUs from './Pages/Tourism/components/PartnerWithUs'
import StiPage from './Pages/Tourism/pages/StiPage'
import TourismContactPage from './Pages/Tourism/pages/Contact'
// import TourismHomepage from './Tourism/pages/Homepage'
// import TourismAbout from './Tourism/pages/About'
// import OurWorkPage from './Tourism/pages/OurWorkPage'
// import PartnerWithUs from './Tourism/components/PartnerWithUs'
// import StiPage from './Tourism/pages/StiPage'
// import TourismContactPage from './Tourism/pages/Contact'
// import ScrollToTop from './Tourism/components/ScrollToTop'

function App() {
  const location = useLocation()

  // Check if the current route starts with "/tourism"
  const isTourismRoute = location.pathname.startsWith('/tourism')

  return (
    <div>
      <ScrollToTop />
      {isTourismRoute ? <TourismNavbar /> : <Navbar />}

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-us' element={<Whoarewepage />} />
        <Route path='/whychooseus' element={<Whychooseuspage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/tourism' element={<TourismHomepage />} />

        {/* Tourism Routes */}

        <Route path='/tourism/about' element={<TourismAbout />} />
        <Route path='/tourism/ourwork' element={<OurWorkPage />} />
        <Route path='/tourism/partnerwithus' element={<PartnerWithUs />} />
        <Route path='/tourism/sti' element={<StiPage />} />
        <Route path='/tourism/contact' element={<TourismContactPage />} />
      </Routes>

      {isTourismRoute ? "" : <Contact />}
      <Footer />
    </div>
  )
}

export default App
