import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/Layout'

import { FaFilePdf } from 'react-icons/fa'

import philanthropy from '../img/psrf/philanthropy.png'
import scholarships from '../img/psrf/scholarships.jpg'
import publications from '../img/psrf/publications.png'
import psr_girls_5 from '../img/psr-girls-5.jpg'

export default class ScholarshipPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <h1>Scholarships</h1>
              <p>
                With the help of our generous donors, the Phi Sigma Rho Foundation has provided scholarships since 2009. ​Recipients are selected on the basis of the applicant's scholastic record, service to Phi Sigma Rho and the community, campus involvement, and recommendations from references.
              </p>
              <ul>
                <li>The Foundation currently provides six $1,000 scholarships each year.</li>
                <li>Eligible applicants are undergraduate and graduate members of Phi Sigma Rho in good standing.</li>
                <li>Scholarship applications are usually realeased in October and <strong>due March 1</strong> each year.</li>
                <li>Recipients are awarded in July at the National meeting for use in the upcoming academic year.</li>
              </ul>
              <p>Eligible sisters may view and submit scholarship applications by signing in to the Phi Rho Portal and clicking Scholarship Applications.</p>
              <a href='https://portal.phisigmarho.org' className='button is-large is-rounded' style={{ fontFamily: 'Quicksand', fontWeight: 'bold', display: 'block', color: '#8e2344', backgroundColor: 'white', border: '3px #8e2344 solid', borderRadius: 0, marginLeft: 'auto', marginRight: 'auto', width: '40%', minWidth: '200px' }}>Phi Rho Portal</a>

              <div className='section' style={{ padding: '2rem 0rem', paddingTop: '4rem' }}>
                <div className=''>
                  <div className='columns'>
                    <div className='column has-text-centered'>
                      <div>
                        <Link to='/winners'><img src={scholarships} className='circle' /></Link>
                        <p className='title'><Link to='/recipients'>Scholarship Winners</Link></p>
                        <p className=''>The Foundation has awarded scholarships since 2005 and expanded from one scholarship to six awards each year. Learn about the fabulous sisters who were awarded Phi Sigma Rho Foundation scholarships! </p>
                      </div>
                    </div>
                    <div className='column has-text-centered'>
                      <div>
                        <Link to='/giving'><img src={publications} className='circle' /></Link>
                        <p className='title'><a href='https://www.classy.org/give/238204/#!/donation/checkout'>Scholarship Fund</a></p>
                        <p className=''>The Phi Sigma Rho Foundation is working to ensure the longevity of our scholarship. Your gift allows us to plan for endowments and support Phi Rhos for years to come through scholarship. Give to the Scholarship Fund today! </p>
                      </div>
                    </div>
                    <div className='column has-text-centered'>
                      <div>
                        <Link to='/memorial'><img src={philanthropy} className='circle' /></Link>
                        <p className='title'><Link to='/memorial'>Memorial &amp; Legacy Scholarships</Link></p>
                        <p className=''>The Foundation is proud to honor exceptional Phi Rho's and supporters of our sisters through our scholarships. Learn more about their legacies and contributions to the Phi Sigma Rho sisterhood. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3>Merit Scholarship</h3>
              <p>The Merit Scholarship is given to a well-rounded sister who has excelled academically, as well as promoting the ideals of the sisterhood by being a positive influence through 
              their chapter and community as a representative of Phi Sigma Rho. A minimum of a 3.00/4.00 GPA is required to qualify. Financial need will not be considered in determining the winner.</p>
              <h3>Leadership Scholarship</h3>
              <p>The Leadership Scholarship is given to a sister who is a leader in her chapter and community. She demonstrates this through encouragement and mentorship of others and through 
              meaningful participation in Phi Sigma Rho. Although academic achievement is not considered in determining the winner of the scholarship, a minimum of a 2.75/4.00 GPA is required
              to qualify. Financial need will not be considered in determining the winner.</p>
              <h3>Philanthropy &amp; Service Scholarship</h3>
              <p>The Philanthropy &amp; Service Scholarship is given to a sister who actively supports and participates in acts of philanthropy and service. She shows this through her acts of 
              community service, leadership skills, volunteerism, and meaningful participation in Phi Sigma Rho and/or other activities. Although academic achievement is not considered in determining
              the winner, a minimum of a 2.75/4.00 GPA is required to qualify. Financial need will not be considered in determining the winner.</p>
              <h3>Sarah Rogers McClure Memorial Scholarship</h3>
              <p>The Sara Rogers McClure Memorial Scholarship is given to recognize a sister who always puts others fists and takes action because it is the right thing to do, not for attention
              or personal gains. The ideal recipient will also be active in Phi Sigma Rho and participate in community service or other meaningful activities. Although academic achievement is not
              considered in determining the winner, a minumum of a 2.75/4.00 GPA is required to qualify. Financial need will not be considered in determining the winner.</p>
              <h3>Anne Louise Roach Legacy Scholarship</h3>
              <p>This scholarship was created to recognize the first traditional mother-daughter legacy of Phi Sigma Rho between Jennifer and Anne Roach. The ideal recipient will personify what it 
              means to be a Phi Rho through her acts of friendship, dedication to scholarship, and display of encouragement. The recipient of this scholarship must be a legacy member as defined by 
              Phi Sigma Rho sorority (daughter, mother, sister, cousing, aunt, or granddaughter of another member), and must currently be pursuing and undergraduate or graduate degree in engineering
              or engineering technology. A minimum of a 2.75/4.00 GPA is required to qualify. Overall GPA will be used to deterimine the winner in the event of a tie in regular scoring. Financial 
              need will not be considered in determining the winner.</p>
              <h3>Francis J. Monigan Memorial Scholarship</h3>
              <p>This scholarship was created to celebrate the legacy of Francis J. Monigan, father of Phi Sigma Rho Gamm Chapter Alumna Heather Monigan. Selection of this scholarship will be made to
              recognize a sister who demonstrates the values Mr. Monigan held most important &ndash; grit, compassion, and a desire for helping others. The ideal recipient will show these values 
              as well a commitment to engineering and Phi Sigma Rho. While all members of Phi Sigma Rho are encouraged to apply for this scholarship, a strong preference will be given to applicants
              who are pursuing an undergraduate or graduate degree in an engineering discipline. Although academic achievement is not considered in determining the winner, a minimum of a 2.75/4.00 GPA
              is required to qualify.  Financial need will not be considered in determining the winner.</p>
              <div className='red-section section full-width-image-container' style={{marginBottom: '2.5em'}}>
                <section className='container' style={{ textAlign: 'center' }}>
                  <h2>Interested in creating a scholarship fund for Phi Sigma Rho?</h2>
                  <p>There are several ways. The two easiest would be either a one time gift or a pledge over three years of $30,000 or more to the Foundation. Contact <a href='mailto:donorengagement@phisigmarhofoundation.org' style={{wordWrap: 'break-word'}}>donorengagement@phisigmarhofoundation.org</a> to begin!</p>
                  <p>Are you an alumnae association member looking for ways to support your local chapter? Contact <a href="mailto:alumnaeaffairs@phisigmarhofoundation.org">alumnaeaffairs@phisigmarhofoundation.org</a> for more information.</p>
                </section>
              </div>

              <p>Scholarships may be used for academic expenses, including tuition, course fees, books, and supplies. Membership dues and room-and-board are not eligible academic expenses.</p>
              <p>Funds may be used at any point in the academic year which they are awarded. Unused scholarship funds must be returned to Phi Sigma Rho Foundation and cannot be held for future use.</p>

              <br/>

              <img src={psr_girls_5} />
              <br/><br/><br/>
              <p style={{textAlign: 'center'}}>If you have any questions about the Phi Sigma Rho Foundation scholarships, please contact <a href="mailto:scholarship@phisigmarhofoundation.org" style={{wordWrap: 'break-word'}}>scholarship@phisigmarhofoundation.org</a></p>
              <br />
              <br />
              <p><Link to='/'>← Go Home</Link></p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

/*
Old Scholarship Application Links
              <p><a href='/pdf/2020-merit-scholarship-application.pdf'><FaFilePdf /> Download Application</a></p>
              <p><a href='/pdf/2020-leadership-scholarship-application.pdf'><fafilepdf /> download application</a></p>
              <p><a href='/pdf/2020-philanthropy-and-service-scholarship-application.pdf'><fafilepdf /> download application</a></p>
              <p><a href='/pdf/2020-sarah-mcclure-scholarship-application.pdf'><fafilepdf /> download application</a></p>
              <p><a href='/pdf/2020-fjm-memorial-scholarship-application.pdf'><fafilepdf /> download application</a></p>
              <p><a href='/pdf/2020-alr-legacy-scholarship-application.pdf'><fafilepdf /> download application</a></p>
*/              
