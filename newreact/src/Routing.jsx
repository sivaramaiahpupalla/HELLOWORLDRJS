import React from 'react'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

const Page = () => {
  return (
  <>
 <h1>Page</h1>
  <link to="/about">About</link>
  <link to="/contact">Contact</link>
  <link to="/">Home</link>
  </>
  )
}


const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Page />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default Routing