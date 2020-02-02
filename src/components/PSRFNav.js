import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  // NavItem,
  // NavLink,
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

  /* TODO - Links could behave better... be sure to preserve Link for performance */
  render() {
    return (
      <div>
       <Navbar color="light" light expand="md">
            <Link to='/' className='navbar-item' title='Logo'>
              <NavbarBrand>
                <img src={logo} alt='Phi Sigma Rho Foundation' style={{ width: 'auto', maxHeight: '3rem' }} />
              </NavbarBrand>
            </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <Link style={{color: '#666'}} to='/about'>About</Link>
                </DropdownToggle>
                <DropdownMenu>
                    <Link style={{color: '#666'}} to='/publications'><DropdownItem>Publications</DropdownItem></Link>
                    <Link style={{color: '#666'}} to='/volunteers'><DropdownItem>Volunteers</DropdownItem></Link>
                    <Link style={{color: '#666'}} to='/contact'><DropdownItem>Contact</DropdownItem></Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <Link style={{color: '#666'}} to='/giving'>Give Today</Link>
                </DropdownToggle>
                <DropdownMenu>
                    <Link style={{color: '#666'}} to='/galentines2020'><DropdownItem>Galentine&rsquo;s Day</DropdownItem></Link>
                    <Link style={{color: '#666'}} to='/donors'><DropdownItem>Donor Recognition</DropdownItem></Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <Link style={{color: '#666'}} to='/scholarships'>Scholarships</Link>
                </DropdownToggle>
                <DropdownMenu>
                    <Link style={{color: '#666'}} to='/recipients'><DropdownItem>Recipients</DropdownItem></Link>
                    <Link style={{color: '#666'}} to='/memorial'><DropdownItem>Memorial Scholarships</DropdownItem></Link>
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
          </Collapse>
        </Navbar>
      </div>
    );
  }
}