import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import About from './pages/About'
import OurImpact from './pages/OurImpact'
import WhatWeDo from './pages/WhatWeDo'
import News from './pages/News'
import GetInvolved from './pages/GetInvolved'
import Donate from './pages/Donate'
import ContactUs from './pages/ContactUs'
import PastConferences from './pages/PastConferences'
import PastAwards from './pages/PastAwards'
import PurchaseTickets from './pages/PurchaseTickets'
import Nominate from './pages/Nominate'
import Speakers2026 from './pages/Speakers2026'

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-impact" element={<OurImpact />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/news" element={<News />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/past-conferences" element={<PastConferences />} />
        <Route path="/past-awards" element={<PastAwards />} />
        <Route path="/purchase-conference-tickets" element={<PurchaseTickets />} />
        <Route path="/nominate" element={<Nominate />} />
        <Route path="/2026-speakers" element={<Speakers2026 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
