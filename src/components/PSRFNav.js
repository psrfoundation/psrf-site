import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import Link from 'gatsby-link'
// import HoverControlledDropdown from '../components/HoverControlledDropdown'

import { FaInstagram, FaLinkedin, FaFacebookSquare, FaPinterestSquare, FaTwitterSquare } from 'react-icons/fa'

import logo from '../img/logo.png'

export default class PSRFNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
       <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <Link to='/' className='navbar-item' title='Logo'>
              <img src={logo} alt='Phi Sigma Rho Foundation' style={{ width: 'auto', maxHeight: '4rem' }} />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <Link style={{color: '#666'}} to='/about'>About</Link>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink style={{color: '#666'}} href='/publications'>Publications</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink style={{color: '#666'}} href='/volunteers'>Volunteers</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink style={{color: '#666'}} href='/contact'>Contact</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <Link style={{color: '#666'}} to='/giving'>Give Today</Link>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink style={{color: '#666'}} href='/donors'>Donor Recognition</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <Link style={{color: '#666'}} to='/scholarships'>Scholarships</Link>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink style={{color: '#666'}} href='/recipients'>Recipients</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink style={{color: '#666'}} href='/memorial'>Memorial Scholarships</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <Link style={{color: '#666'}} to='/grants'>Grants</Link>
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <Link style={{color: '#666'}} to='/philanthropy'>Philanthropy</Link>
                </DropdownToggle>
              </UncontrolledDropdown>
            </Nav>
            <div className='social-links social-nav'>
              {/* Instagram */}
              <a href='https://instagram.com/psrfoundation' rel='noopener noreferrer' target='_blank'>
                <FaInstagram mask={['circle']} />
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
          </Collapse>
        </Navbar>
      </div>
    );
  }
}