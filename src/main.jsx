import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import About from './components/About'
import Footer from './components/Footer'
import Social from './components/Social'
import Titles from './components/Titles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Titles/>
    <Social/>
    <About/>
    <Footer/>
  </React.StrictMode>,
)
