import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/Layout'

import { FaFilePdf } from 'react-icons/fa'

import leap_facts from "../img/leap_facts.png"
import leap_pillars from "../img/leap_pillars.png"

export default class LEAPPage extends React.Component {
  render () {
    return (
      <Layout>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <h1>Orchid Relief Grants</h1>
              <p>The Phi Sigma Rho Foundation has wokred to create the Orchid Relief Grand in response to COVID-19. Orchid Relief Grants are for student undergraduate and graduate sisters of Phi Sigma Rho Sorority facing
              significant hardship due to the COVID-19 pandemic. Grant funds are to be used to continue the student's education for the current academic year (2019 &ndash; 2020).</p>
              <p>The purpose of the Orchid Relief Grants is to provide one-time, emergency grants, subject to the availability of funds, to initiated undergraduate and graduate members who are experiencing financial hardship due to the
              COVID-19 crisis. Grants of up to $500 will be given in one payment to approved applicants upon receipt of <strong><em>complete</em></strong> applications, supporting materials, and approval by the 
              Grant Committee. Applications will be accepted and considered on a rolling basis until the program ends on June 15, 2020, or until funds are exhausted. Please e-mail all applications
              and supporting materials to <a href="mailto:programming@phisigmarhofoundation.org">programming@phisigmarhofoundation.org</a>.</p>
              <p>Please direct questions about the application to <a href="mailto:programming@phisigmarhofoundation.org">programming@phisigmarhofoundation.org</a>.</p>
              <p>If you would like to support the Orchid Relief Grants, please consider <a href="https://give.classy.org/orchidrelieffund">donating to the Phi Sigma Rho Foundation's General Fund</a> to support this need.</p>
              <p><a href='/pdf/2020-orchid-relief-grant-application.pdf'><FaFilePdf /> Apply Now!</a></p>
              <h1>Leadership and Educational Programming Grants</h1>
              <p>Phi Sigma Rho has been dedicated to developing the next generation of women engineers. Funding leadership development is just one way the Foundation works to achieve its mission and vision. Thanks in part to generous donations made to the Leadership Education and Programming (LEAP) Fund, the Phi Sigma Rho Foundation has been able to gift grants to fund LEAP sessions to develop Phi Rhos into bold leaders, strong women, and supportive sisters in support!</p>
              <p>Leadership Education and Programming impacts more sisters each year than any other program.  Nearly 500 sisters have been LEAP certified through Phi Sigma Rho, with over 750 sisters having attended at least one program.</p>
              <p>A sister can become LEAP certified by attending workshops held at conferences, convention and regional meetings, and webinar sessions. These sessions are based on three pillars:</p>
              <img style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', width: "80%"}} src={leap_pillars} />
              <br/>
              <p>Your contributions to the LEAP Fund of the Phi Sigma Rho Foundation allows for more grants towards LEAP programming. This support goes a long way in securing impactful keynote speakers, new programs and trainings, and better breakout sessions to reach more Phi Rhos each year.</p> 
              <br/>
              <img style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', width: "80%"}} src={leap_facts} />
              <br/>
              <br/>
              <a href='https://www.classy.org/give/238204/#!/donation/checkout' className='button is-large is-rounded' style={{ fontFamily: 'Quicksand', fontWeight: 'bold', minWidth: '200px', display: 'block', color: '#8e2344', backgroundColor: 'white', border: '3px #8e2344 solid', borderRadius: 0 }}>Donate to LEAP!</a>
              <br/>
              <p><Link to='/'>← Go Home</Link></p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
