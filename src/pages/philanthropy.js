import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

import philanthropy_2 from "../img/philanthropy_2.jpg"
import light_the_night from "../img/light_the_night.png"
import light_the_night_second from "../img/light_the_night_second.jpg"

// import Button from '@material-ui/core/Button';

// import header from '../img/header-grads-trimmed-2.png'

export default class Philanthropy2Page extends React.Component {

  render() {
    // const { data } = this.props
    return (
      <Layout>
        <section className=''>
          <div className='container'>
            <div className='content'>
              <br />
              <h1 style={{ fontSize: '2.5em', textAlign: 'center' }}>The Phi Sigma Rho Foundation</h1>

              <p><img style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', width: "80%" }} src={philanthropy_2} alt="PSR Lanterns" /></p>
              <p>The Phi Sigma Rho Foundation raises, manages and awards funds to support the Sorority’s education and leadership programs (LEAP), give undergraduate and graduate scholarships, and assist in sisters’ philanthropic efforts. The Phi Sigma Rho Foundation is an independent 501(c)(3) nonprofit organization in accordance with the Internal Revenue Code. Though a separate organization, the Phi Sigma Rho Foundation was formed to support the educational and charitable interests of the sisterhood. Phi Sigma Rho Sorority and Phi Sigma Rho Foundation work together to provide all Phi Rho sisters with an experience built on the Phi Sigma Rho values of friendship, scholarship, and encouragement.</p>
              <br />
              <a href='https://www.classy.org/give/238204/#!/donation/checkout' className='button is-large is-rounded' style={{ fontFamily: 'Quicksand', fontWeight: 'bold', minWidth: '200px', display: 'block', color: '#8e2344', backgroundColor: 'white', border: '3px #8e2344 solid', borderRadius: 0 }}>Give Today!</a>
              <br /><br />
              <h1 style={{ fontSize: '2.5em', textAlign: 'center' }}>Light the Night</h1>
              <h2 style={{ textAlign: 'center', marginTop: '0em' }}>for the Leukemia &amp; Lymphoma Society</h2>
              <p><img style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', width: "60%" }} src={light_the_night} alt="PSR Girls" /></p>
              <p>Since 2010, leukemia and lymphoma education and awareness has been one of the major national philanthropies of Phi Sigma Rho. Having sisters and family members who experienced blood cancers first hand, Phi Sigma Rho wanted to have a part in helping find a cure.</p>
              <p>The Phi Sigma Rho Foundation launched its campaign for the Light the Night Walk in 2015.  Light the Night is an annual fundraiser for the Leukemia and Lymphoma Society, the largest voluntary health organization to provide funds for research, finding cures, and providing access to treatments for blood cancer patients. Via this campaign, active and alumnae chapters can easily find and organize walks, or create their own event to benefit the Leukemia and Lymphoma Society. As of June 2019, the Phi Sigma Rho sisterhood has raised over $117,315 through the Light the Night campaign.</p>
              <p>As part of the Phi Sigma Rho Foundation team, chapters will be provided a login for a specific Light the Night Walk team page where they can submit their donations to The Leukemia and Lymphoma Society. All team pages are linked to the Foundation team page.</p>
              <br />
              <p><img style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} src={light_the_night_second} alt="PSR Girls" /></p>
              <br />
              <h3 style={{textAlign: 'center'}}>3 Ways to Participate (both Active &amp; Alumnae)</h3>
              <ul>
                <li><h4 style={{ display: 'inline' }}>Find a Walk: </h4><p style={{ display: 'inline' }}>LLS already provides over 200 walks throughout the nation! Find a walk near you and start raising funds for your team and for LLS.</p></li>
                <li><h4 style={{ display: 'inline' }}>Organize a Walk: </h4><p style={{ display: 'inline' }}>No Light the Night Walks in your area? Chapters can receive a Light the Night Kit from LLS to hold their very own walk on or around campus.</p></li>
                <li><h4 style={{ display: 'inline' }}>Create Your Own Event: </h4><p style={{ display: 'inline' }}>Phi Rho Your Boat? Phi 5K? Lemonade for Leukemia? These are just a few of the great events chapters already do! Create and hold your own event, and submit your donations online.</p></li>
              </ul>
              <a href='https://pages.lls.org/ltn/2019/phisigmarho' className='button is-large is-rounded' style={{ fontFamily: 'Quicksand', fontWeight: 'bold', minWidth: '200px', display: 'block', color: '#8e2344', backgroundColor: 'white', border: '3px #8e2344 solid', borderRadius: 0 }}>Join our Team!</a>
              <br />
              <p style={{ textAlign: 'center', fontStyle: 'italic' }}>For further questions, please contact <a style={{ wordBreak: 'break-word' }} href='mailto:philanthropy@phisigmarhofoundation.org'>philanthropy@phisigmarhofoundation.org</a>.</p>
              <br />
              <h1 style={{ fontSize: '2.5em', textAlign: 'center' }}>DreamGirls Initiative</h1>
              <iframe style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', width: '725px', height: '455px' }} width="725" height="455" src="https://www.youtube.com/embed/QuU5F7yWN3g" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <br />

              <p>The Phi Sigma Rho Foundation is excited to announce a partnership with The DreamGirls Initiative! Starting in Spring 2020, this partnership will provide service and leadership opportunities for active and alumnae organizations of Phi Sigma Rho to support the next generation of women in engineering through engineering-focused programming for middle school girls. These programs will be transferable to schools, Scout troops, community shelters, and more!  Additional details and information will be coming out soon about how both actives and alumnae can get involved in this partnership.</p>

              <p>Founded in 2015 by Phi Sigma Rho Co-Founder, Rashmi Drummond, the DreamGirls Initiative is a nonprofit focused on exposing middle school girls to female role models and their careers through a variety of hands-on events.  This program is committed to inspiring young women in the fields of Science, Technology, Engineering, and Math (STEM) through day long “Dream Days” and after-school “DreamGirls in Action” programming. These programs differentiate themselves by putting career paths first, instead of focusing on STEM skills alone.  For many girls, it doesn't really matter if you like building a bridge if you can't connect the skills behind bridge making to a meaningful career that would utilize these interests and skills. The standout feature of these programs is the focus of female role models for participants through corporate involvement and hands-on programming.</p>
              <p>For more information about the DreamGirls Initiative, visit <a href="https://www.dreamgirlsinitiative.com/" target="_blank" rel="noopener noreferrer">www.dreamgirlsinitiative.com</a>.</p>
              <br />
              <p><Link to='/'>← Go Home</Link></p>
              <br />
            </div>
          </div>
        </section>
      </Layout >
    )
  }
}
