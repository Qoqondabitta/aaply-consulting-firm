import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Poland from './pages/Poland'
import Italy from './pages/Italy'
import Germany from './pages/Germany'
import Hungary from './pages/Hungary'
import USA from './pages/USA'
import Canada from './pages/Canada'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poland" element={<Poland />} />
        <Route path="/italy" element={<Italy />} />
        <Route path="/germany" element={<Germany />} />
        <Route path="/hungary" element={<Hungary />} />
        <Route path="/usa" element={<USA />} />
        <Route path="/canada" element={<Canada />} />
      </Routes>
      <Footer />
    </Router>
  )
}
