import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

import psr_girls_lanterns from "../img/psr_girls_lanterns.png"

export default class PhilanthropyPage extends React.Component {
  render () {
    // const { data } = this.props

    return (
      <Layout>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <h1>Philanthopy Event: Light the Night</h1>

              <p>Since 2010, leukemia and lymphoma education has been one of the major national philanthropies of Phi Sigma Rho. Leukemia and lymphoma are blood cancers that can affect cells all over the body, including in the blood, bone marrow, spleen, lymph nodes, and other parts of the lymphatic system. Having sisters and family members who experienced blood cancers first hand, Phi Sigma Rho wanted to have a part in helping find a cure.</p>

              <p><img src={psr_girls_lanterns} alt="PSR Lanterns" /></p>

              <p>To further unite the chapters in their philanthropic efforts, the Phi Sigma Rho Foundation launched the Light the Night program with The Leukemia and Lymphoma Society's Light the Night Walk. The Leukemia and Lymphoma Society is the largest voluntary health organization to provide funds for research, finding cures, and providing access to treatments for blood cancer patients. The Light the Night Walk is the Leukemia and Lymphoma Society's campaign which funds treatments that are saving lives of patients today. Via this campaign, active and alumnae chapters can easily find and organize walks, or create their own event to benefit the Leukemia and Lymphoma Society.</p>

              <p>As part of the Phi Sigma Rho Foundation Program, chapters have been provided a login for an specific Light the Night Walk team page where they can submit their donations to The Leukemia and Lymphoma Society. All team pages are linked to the Foundation team page.</p>

              <h2>3 Ways to Participate (both Active &amp; Alumnae)</h2>

              <ul>
                <li><b>Find a Walk:</b> LLS already provides over 200 walks throughout the nation! Find a walk near you and start raising funds for your team and for LLS.</li>
                <li><b>Organize a Walk:</b> No Light the Night Walks in your area? Chapters can receive a Light the Night Kit from LLS to hold their very own walk on or around campus.</li>
                <li><b>Create Your Own Event:</b> Phi Rho Your Boat? Phi 5K? Lemonade for Leukemia? These are just a few of the great events chapters already do! Create and hold your own event, and submit your donations online.</li>
              </ul>
              <p><a target='_blank' rel='noopener noreferrer' href='https://pages.lls.org/ltn/2019/phisigmarho'><b>Join the Phi Sigma Rho Foundation team now!</b></a></p>

              <p>For further questions, please contact <a href='mailto:philanthropy@phisigmarhofoundation.org'>philanthropy@phisigmarhofoundation.org</a>.</p>

              <p><Link to='/'>← Go Home</Link></p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
