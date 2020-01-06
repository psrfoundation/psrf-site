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
                <li>Scholarship applications are <strong>due March 1</strong> each year.</li>
                <li>Recipients are awarded in July at the National meeting for use in the upcoming academic year.</li>
              </ul>

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
              <p>This scholarship is given to a sister who has excelled academically, as well as demonstrating exceptional acts of community service; leadership, volunteerism, and meaningful participation in Phi Sigma Rho and/or other activities. Financial need will not be considered in determining the winner.</p>
              <p><a href='/pdf/2020-merit-scholarship-application.pdf'><FaFilePdf /> Download Application</a></p>
              <h3>Leadership Scholarship</h3>
              <p>This scholarship is given to a sister who is a leader in her chapter and community, demonstrated by exceptional acts of community service; volunteerism; and meaningful participation in Phi Sigma Rho and other activities.  Although academic achievement is not considered in determining the winner of this scholarship, a minimum of a 2.75/4.00 GPA is required to qualify. Financial need will not be considered in determining the winner.</p>
              <p><a href='/pdf/2020-leadership-scholarship-application.pdf'><FaFilePdf /> Download Application</a></p>
              <h3>Philanthropy &amp; Service Scholarship</h3>
              <p>This scholarship is given to a sister who has actively participated in the chapter’s philanthropy and service project for a minimum of 10 hours of community service this academic year, and meaningful participation in Phi Sigma Rho and/or other activities. Although academic achievement is not considered in determining the winner, a minimum of a 2.75/4.00 GPA is required to qualify. Financial need will not be considered in determining the winner.</p>
              <p><a href='/pdf/2020-philanthropy-and-service-scholarship-application.pdf'><FaFilePdf /> Download Application</a></p>
              <h3>Sarah Rogers McClure Memorial Scholarship</h3>
              <p>This scholarship recognizes a sister who showcases the strength and character traits that Sarah demonstrated on a daily basis, as well as a positive attitude that she shared with everyone that had the pleasure of knowing her.</p>
              <p><a href='/pdf/2020-sarah-mcclure-scholarship-application.pdf'><FaFilePdf /> Download Application</a></p>
              <h3>Francis J. Monigan Memorial Scholarship</h3>
              <p>The Francis J. Monigan Memorial Scholarship recognizes a Phi Sigma Rho sister in good standing who demonstrates grit and compassion towards others, with a strong preference given to engineering majors. GPA is not considered for this award. This scholarship honors alumna member Heather Monigan's father, Francis, who was a strong supporter of Phi Sigma Rho and women in engineering.</p>
              <p><a href='/pdf/2020-fjm-memorial-scholarship-application.pdf'><FaFilePdf /> Download Application</a></p>
              <h3>Anne Louise Roach Legacy Scholarship</h3>
              <p>The Anne Louise Roach Legacy Scholarship was created by Jennifer and Bryan Roach to recognize the first traditional mother-daughter legacy and exceptional achievments of
              Anne Roach as she graduated from Purdue University in May 2019. Anne is a BS Chemical Engineer, having completed a five term co-op with Mead Johnson and Reckitt Benckiser and a
              summer internship at Sazerac's Glenmore Distillery. In addition, Anne graduated with two minors: Spanish and Global Engineering, with three study abroad experiences in Peru, 
              Switzerland, and Spain. Anne was a member of the Alpha Chapter as Director of Alumnae Affairs, Advisory Board, and Philanthropy Chair. Her campus involvement stretched beyond 
              the sorority to include Professional Practice Ambassador, Cultural Companion to Purdue's Study Abroad office, Passport (member) to assist international students, and Officer 
              in Omega Chi Epsilon (Chemical Engineering Honor Society). Anne was also involved in her community beyond the campus, teaching English as a second language to area fourth 
              grade students as part of Ayude y Aprende Service Learning Project.</p>
              <p>The Anne Louse Roach Legacy Scholarship recognizes the maturity of the sorority, the broad reaching impact of women in engineering, and the generational impact made by 
              all members of Phi Sigma Rho.</p>
              <p><a href='/pdf/2020-alr-legacy-scholarship-application.pdf'><FaFilePdf /> Download Application</a></p>
              
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

Pending Donor Approval

<h3>Francis J. Monigan Memorial Scholarship</h3>
              <p>This scholarship is recognizes a sister who demonstrates grit and compassion towards others, with a strong preference given to engineering majors.</p>
              <p><a href='#'><FaFilePdf /> Download Application</a></p>
              <h3>Anne Louise Roach Legacy Scholarship</h3>
              <p>The scholarship is given to a Phi Rho "legacy" member (as defined by the Phi Sigma Rho National Sorority) in good standing majoring in engineering or engineering technology, who personifies what it means to be a Phi Rho, with excellence in friendship, scholarship, and philanthropy, as demonstrated in their own achievements.</p>
              <p><a href='#'><FaFilePdf /> Download Application</a></p>

*/
