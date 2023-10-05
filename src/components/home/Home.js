import React, { useState } from 'react'
import './Home.css'
import Fade from 'react-reveal/Fade'
import { Bounce } from 'react-reveal'
import { Link } from 'react-scroll'
import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'
import Navbar from '../navbar/Navbar'
import config from '../../config'
import profile from '../../images/ricksanchez.jpg'
import linkedin from '../../images/social/share102.png'

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <div className="home-wrapper">
      <div className="home">
      <script async src="https://umami.thatquery.com/script.js" data-website-id="45a55084-d18f-4472-83a1-9dc372635c37"></script>
      
      <script defer data-domain="cyberwep.com" src="http://54.83.91.45:8000/js/script.js"></script>
      
        <Particles className="particles" params={config.particles} />
        <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
          <Fade bottom distance="40px">
            <img
              className="profile"
              alt="m.jigalin profile"
              src={profile}
              onLoad={() => setImageLoaded(true)}
            />
            <h1 className="greeting-text">
              Hi, I'm <span className="name">Emy</span>.{' '}
              <span className="wave-emoji" role="img" aria-label="waving hand">
               🤙
              </span>
            </h1>
            <h1 className="greeting-text">
              <Typewriter
                options={{
                  strings: [
                    'Computer Engineering ',
                    'I like to design things ',
                    'Software/Hardware ',
                    'Security Researcher',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: '<',
                  delay: 100,
                }}
              />
            </h1>
            <Bounce cascade>
              <div className="links">
                <a
                  href="https://linktr.ee/querylab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="LinkTree Logo" width="50px" />
                </a>
              </div>
            </Bounce>
            <script async src="https://umami.thatquery.com/script.js" data-website-id="45a55084-d18f-4472-83a1-9dc372635c37"></script>

            <script defer data-domain="cyberwep.com" src="http://54.83.91.45:8000/js/script.js"></script>

            <div className="scroll-down">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
              >
                <ArrowDropDownCircleIcon
                  fontSize="large"
                  style={{ pointerEvents: 'fill', cursor: 'pointer' }}
                />
              </Link>
            </div>
          </Fade>
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default Home
