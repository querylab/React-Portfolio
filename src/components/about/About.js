import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>
              I'm Emy{' '}
              <span role="img" aria-label="lightning">
              👽👾
              </span>{' '}
            </p>
            <p>
              <span role="img" aria-label="lightning">
              💻
              </span>{' '}
              I'm a Computer Engineering focusing on Android/Web Application and Emerging
              tech such and Blockchain, Web 3.0.
            </p>
            <p>
              <span role="img" aria-label="lightning">
              🛠 
              </span>{' '}
              You can find me working with Security Researcher, Burpsuit/Plugins, React, Java, Node,
              Docker and AndroidStudio.
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                💚
                </span>{' '}
                I love
              </p>
              <Typewriter
                options={{
                  strings: [
                    'Learning New Technologies',
                    'Solving Complex Problems',
                    'Fixing Hard-to-Fix Bugs',
                    'Research',
                    'Bug Bounty',
                    'Learning New Technologies',
                    'Collaborating With Others',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>.</p>
            </div>
            <p>
            From a very young age, I have dedicated my time to search and learn new technologies.
            </p>
            <div className="location-wrapper">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p>127.0.0.1/🇵🇷</p>
            </div>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About
