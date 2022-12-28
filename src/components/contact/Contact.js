import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'
import ContactForm from '../contactForm/ContactForm'
import linkedin from '../../images/social/medium.png'
import github from '../../images/social/github.png'
import facebook from '../../images/social/twitter.png'

const Contact = () => {
  return (
    <Section title="Contact">
      <ContactForm />
      <Bounce cascade>
        <div className="links">
          <a
            href="https://github.com/querylab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github Logo" width="40px" />
          </a>
          <a
            href="https://medium.com/@querylab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Medium Logo" width="40px" />
          </a>

          <a
            href="https://twitter.com/querylab_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Reddit Logo" width="40px" />
          </a>
        </div>
      </Bounce>
    </Section>
  )
}

export default Contact
