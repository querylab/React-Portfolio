import React from 'react'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import TopButton from './components/topButton/TopButton'

function App() {
  return (
    <div className="App">
      <script async defer data-website-id="d9691128-7b5b-495a-b43c-1495fd627698" src="https://umami-54r3.onrender.com/umami.js"></script>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <TopButton />
    </div>
  )
}



export default App
