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
       <Home />
       <script async src="https://ackee.thatquery.com/tracker.js" data-ackee-server="https://ackee.thatquery.com" data-ackee-domain-id="666020f6-e2d4-4b79-a471-6476a58a366d"></script>
       <script async src="https://umami.thatquery.com/script.js" data-website-id="f9cfe946-5756-4a8b-ad7e-acacb4f963f7"></script>
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
