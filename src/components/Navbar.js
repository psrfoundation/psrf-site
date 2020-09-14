import React from 'react'
// import { Link } from 'gatsby'
// import { FaInstagram, FaLinkedin, FaFacebookSquare, FaPinterestSquare, FaTwitterSquare } from 'react-icons/fa'
// import logo from '../img/logo.png'
import PSRFNav from './PSRFNav';

const Navbar = class extends React.Component {
  componentDidMount () {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }

  render () {
    return (
      <div>
        <nav id='topbar' style={{ display: 'block', backgroundColor: '#8e2344', minHeight: '20px' }}>
          <a href='http://portal.phisigmarho.org' target='_blank' rel='noopener noreferrer' style={{ verticalAlign: 'text-bottom' }}>Phi Rho Portal</a>
        </nav>
        <PSRFNav />
        {/*
        <div className='navbar is-transparent' role='navigation' aria-label='main-navigation'>
          <div className='container'>
            <div className='navbar-brand'>
              <Link to='/' className='navbar-item' title='Logo'>
                <img src={logo} alt='Phi Sigma Rho Foundation' style={{ width: 'auto', maxHeight: '4rem' }} />
              </Link>
              <div className='navbar-burger burger' data-target='navMenu'>
                <span />
                <span />
                <span />
              </div>
            </div>

            <div id='navMenu' className='navbar-menu'>
              <div className='navbar-start has-text-centered'>
                <Link className='navbar-item' to='/about'>
          About
                </Link>
                <Link className='navbar-item' to='/giving'>
          Give Today
                </Link>
                <Link className='navbar-item' to='/leap'>
          LEAP
                </Link>
                <Link className='navbar-item' to='/scholarships'>
          Scholarships
                </Link>
                <Link className='navbar-item' to='/philanthropy'>
          Philanthropy
                </Link>
              </div>
              <div className='navbar-end has-text-centered'>
        <div className='social-links'>
                  <a href='https://instagram.com/psrfoundation' rel='noopener noreferrer' target='_blank'>
                    <FaInstagram mask={['circle']} />
                  </a>

                  <a href='https://twitter.com/psrfoundation' rel='noopener noreferrer' target='_blank'>
                    <FaTwitterSquare />
                  </a>

                  <a href='https://facebook.com/PSRFoundation' rel='noopener noreferrer' target='_blank'>
                    <FaFacebookSquare />
                  </a>

                  <a href='https://linkedin.com/company/phi-sigma-rho-foundation_2' rel='noopener noreferrer' target='_blank'>
                    <FaLinkedin />
                  </a>

                  <a href='https://pinterest.com/psrfoundation' rel='noopener noreferrer' target='_blank'>
                    <FaPinterestSquare />
                  </a>
                </div>
                <a className='navbar-item' style={{ padding: 0, paddingRight: '12px' }} />
              </div>
            </div>
          </div>
        </div>*/}</div>
    )
  }
}

export default Navbar
