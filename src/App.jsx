import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import OurStory from './pages/OurStory'
import Showroom from './pages/Showroom'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/showroom" element={<Showroom />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
