import React from 'react'
import Link from 'gatsby-link'

import { FaInstagram, FaTwitterSquare, FaLinkedin, FaPinterestSquare, FaFacebookSquare } from 'react-icons/fa'

import banner from '../img/psrf/banner.jpg' // psr_foundation_logo_inverted.jpg' TODO COLOR

export default class Footer extends React.Component {
/*
  constructor(props) {
    super(props)

    this.state = {
      modalState: false
    };

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState

      return { modalState: newState }
    })
  } */

  render () {
    return (
      <footer className='footer'>
        <div className='content has-text-centered'>
          <Link to='/'><img src={banner} style={{width: '500px'}} alt='Phi Sigma Rho Foundation' /></Link>
          <p style={{wordBreak: 'break-word', marginTop: '1em', marginBottom: 0}}>
            Phi Sigma Rho Foundation | P.O. 7021 Box West Chester, IL<br />
            P: 937-815-0268 | contact@phisigmarhofoundation.org
          </p>
          <div className='social-links'>
            {/* Instagram */}
            <a href='https://instagram.com/psrfoundation' rel='noopener noreferrer' target='_blank'>
              <FaInstagram />
            </a>

            {/* Twitter */}
            <a href='https://twitter.com/psrfoundation' rel='noopener noreferrer' target='_blank'>
              <FaTwitterSquare />
            </a>

            {/* Facebook */}
            <a href='https://facebook.com/PSRFoundation' rel='noopener noreferrer' target='_blank'>
              <FaFacebookSquare />
            </a>

            {/* LinkedIn */}
            <a href='https://linkedin.com/company/phi-sigma-rho-foundation_2' rel='noopener noreferrer' target='_blank'>
              <FaLinkedin />
            </a>

            {/* Pinterest */}
            <a href='https://pinterest.com/psrfoundation' rel='noopener noreferrer' target='_blank'>
              <FaPinterestSquare />
            </a>
          </div>
          <p className='copyright'>
            &copy; 2019 The Phi Sigma Rho Foundation
          </p>
        </div>
      </footer>
    )
  }
}

/*
Footer.propTypes = {

}
*/
