import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/Layout'

import hero_about from '../img/psrf/hero_about.jpg'
import bubble_annualreports from '../img/psrf/bubble_annualreports.jpg'
import bubble_volunteer from '../img/psrf/bubble_volunteer.jpg'
import bubble_contact from '../img/psrf/bubble_contact.jpg'

export default class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <h1 id="annualreports">About the Phi Sigma Rho Foundation</h1>

              <p>The Phi Sigma Rho Foundation was founded and incorporated in 2005 to give members and friends an opportunity to support Phi Sigma Rho and women in engineering through charitable and tax exempt gifts. It is governed by a Board of Directors that carries out its mission through scholarships, leadership and educational programming grants, and philanthropy campaigns. With the generous support of Phi Rhos across the country through annual contributions, planned gifts, and endowed funds, the Foundation is able to help build the future for Phi Sigma Rho members to be their best.</p>

              <p><img src={hero_about} alt="Phi Sigma Rho Foundation" /></p>

              <h3 id="ourmission">Our Mission</h3>

              <p>The Phi Sigma Rho Foundation exists to promote social responsibility, personal integrity, and lifelong enrichment by providing professional, educational, philanthropic, and leadership opportunities.</p>

              <h3 id="ourvision">Our Vision</h3>

              <p>Advancement of Phi Sigma Rho Sorority and its community through the encouragement of selfless giving.</p>

              <h3 id="ourmotto">Our Motto</h3>

              <p>Building the future, <strong>together</strong>.</p>

              <div className='red-section section full-width-image-container'>
                <section className='container' style={{ textAlign: 'center' }}>

                  <h2 id="onephirho">One Phi Rho</h2>
                  <p>The Phi Sigma Rho Foundation is an independent 501(c)(3) nonprofit organization in accordance with the Internal Revenue Code. Though a separate organization, the Phi Sigma Rho Foundation was formed to support the educational and charitable interests of our sisterhood. Phi Sigma Rho Sorority and Phi Sigma Rho Foundation work together to provide all Phi Rho sisters with an experience built on the Phi Sigma Rho values of  friendship, scholarship, and encouragement.</p>
                </section>
              </div>

              <div className='section' style={{ padding: '0rem 0rem' }}>
              <h1 className='has-text-centered'>See more from our ladies!</h1>
              <br/>
                <div className=''>
                  <div className='columns'>
                    <div className='column has-text-centered'>
                      <div>
                        <Link to='/publications'><img src={bubble_annualreports} className='circle' /></Link>
                        <p className='title'><Link to='/publications'>Publications</Link></p>
                        <p className=''>View our Annual Report and The Key Magazine.</p>
                      </div>
                    </div>
                    <div className='column has-text-centered'>
                      <div>
                        <Link to='/volunteers'><img src={bubble_volunteer} className='circle' /></Link>
                        <p className='title'><Link to='/volunteers'>Volunteers</Link></p>
                        <p className=''>Meet our Board of Directors and dedicated volunteers.</p>
                      </div>
                    </div>
                    <div className='column has-text-centered'>
                      <div>
                        <Link to='/contact'><img src={bubble_contact} className='circle' /></Link>
                        <p className='title'><Link to='/contact'>Contact Us</Link></p>
                        <p className=''>Have a question? We’re here to help - Contact us here.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p><br /></p>
              {/*
              <h2 id="annualreports">Annual Reports</h2>

              <p>Each year we publish a report of our accomplishments and financial impact to Phi Sigma Rho.</p>

              <p>
              <a href="pdf/2018-annual-report.pdf">Annual Report 2018</a><br/>
              <a href="pdf/2017-annual-report.pdf">Annual Report 2017</a><br/>
              <a href="pdf/2016-annual-report.pdf">Annual Report 2016</a><br/>
              <a href="pdf/2015-annual-report.pdf">Annual Report 2015</a><br/>
              <a href="pdf/2014-annual-report.pdf">Annual Report 2014</a>
              </p>

              <p><a href="publications">View All</a></p>

              {/*
              | [Annual Report 2013]() |
              | [Annual Report 2012]() |
              | [Annual Report 2011]() |
              | [Annual Report 2010]() |
              | [Annual Report 2009]() |
              | [Annual Report 2008]() |
              | [Annual Report 2007]() |
              | [Annual Report 2006]() |
              | [Annual Report 2005]() |

              <p><br/></p>

              <h2 id="boardofdirectors">Board of Directors</h2>

              <p><a href="">Learn more</a> about our Board of Directors.</p>

              <p><br/></p>
              */}

              <p><Link to='/'>← Go Home</Link></p>
            </div></div>
        </section>
      </Layout>
    )
  }
}
