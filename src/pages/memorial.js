import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/Layout'

import srm from '../img/srm.jpg'
import alr from '../img/alr.jpg'
// import fjm from 'img/fjm.jpg'
import fjmFather from '../img/fjm_father.jpg'

export default class MemorialScholarshipPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <h1>About our Memorial &amp; Legacy Scholarships</h1>

              <p>The Phi Sigma Rho Foundation is proud to honor outstanding Phi Sigma Rho sisters and supporters through our Memorial  and Legacy Scholarships.  Their contributions to our sisterhood leave a lasting legacy that will continue to secure the future success of our Phi Sigma Rho members.</p>

              <h3>The Sarah Rogers McClure Memorial Scholarship</h3>
              <img src={srm} style={{ margin: '20px', marginLeft: 0, marginBottom: 0, float: 'left', width: '300px' }} />
              <br />
              <p>Sara Rogers McClure, from Newburgh, Indiana, joined Phi Sigma Rho in 1988 as part of the Alpha chapter's Epsilon pledge class. She was a caring and hard-working sister and friend. She was known, not only for her commitment and follow-through, but for her kindness, her respect for others, and for being there for others whenever and however she was needed. She had a relentlessly positive attitude and an infections smile. Sarah graduated from Purdue University with a Chemical Engineering Degree in 1991 and went to work for the Department of Energy. In 1995, she took a position with Procter & Gamble as a Health, Safety, and Environmental professional. Sarah married Bill McClure in 2002 and adopted daughter Ann from China in 2004.</p>

              <p>Sarah was diagnosed with breast cancer in 2002. She fought the disease while moving on with her life and also inspiring and educating others through her involvement with awareness and fundraising campaigns. As a dedicated runner, Sarah continued to run marathons throughout her years of treatment, even after chemotherapy and hip replacement surgery.</p>
              <p>Sarah ultimately completed her journey, and sadly, passed away with cancer in December 2010. Not surprisingly, she continued to give by donating her body to medical science.</p>
              <p>Upon her death, a variety of tributes were made in her honor. Notably, donations of over $8,000 were made in her name to the Komen Tissue Bank, and a conference room as named in her honor at Procter &amp; Gamble, with a plaque reading "In Celebration of Her Service to Others; Your faith, friendship, and courage insipre us and continue to lift us up. Thank you for touching our hearts and lives in such a special way."</p>

              <p><a href='https://www.classy.org/give/238204/#!/donation/checkout'><b>Donate to the Sarah Rogers McClure Memorial Scholarship Fund</b></a></p>

              <p><Link to='/'>← Go Home</Link></p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

/* Pending donor approval:
              <h3>The Anne Louise Roach Legacy Scholarship</h3>
              <img src={alr} style={{ margin: '20px', marginLeft: 0, marginBottom: 0, float: 'left', width: '50%', maxWidth: '220px' }} />
              <br />
              <p>The Anne Louise Roach Legacy Scholarship was created by Jennifer and Bryan Roach to recognize the first traditional mother-daughter legacy and exceptional achievements of Anne Roach as she graduated from Purdue University in May 2019. Anne is a BS Chemical Engineer, having completed a 5 term Co-op with Mead Johnson and Reckitt Benckiser and a summer internship at Sazerac’s Glenmore Distillery.  In addition, Anne graduated with two Minors: Spanish and Global Engineering, with three study abroad experiences in Peru, Switzerland and Spain.   Anne was a member of the Alpha chapter as Director of Alumnae Affairs, Advisory Board and Philanthropy Chair. Her campus involvement stretched beyond the sorority to include Professional Practice Ambassador, Cultural Companion to Purdue’s Study Abroad office, Passport (member) to assist international students, and Officer in Omega Chi Epsilon (Chemical Engineering Honor Society).  Anne was also involved in her community beyond the campus, teaching English as a second language to area 4th grade students as part of Ayunda y Aprende Service Learning Project.</p>
              <p>The Anne Louise Roach Legacy Scholarship recognizes the maturity of the sorority, the broad reaching impact of women in engineering, and the generational impact being made by all members of Phi Sigma Rho.</p>
              <p><a href='https://www.classy.org/give/238204/#!/donation/checkout'><b>Donate to the Anne Louise Roach Legacy Scholarship Fund</b></a></p>

              <h3>The Francis J. Monigan Memorial Scholarship</h3>
              <img src={fjmFather} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', marginBottom: 0, maxWidth: '70%' }} />
              <br />
              <p style={{marginTop: '20px'}}>Sister Heather Monigan and her father, Francis Monigan before the Phi Rho formal, just before he passed.</p>
              
              <p><a href='https://www.classy.org/give/238204/#!/donation/checkout'><b>Donate to the Francis J. Monigan Scholarship Fund</b></a></p>
*/
