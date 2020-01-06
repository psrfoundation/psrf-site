import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/Layout'

import { FaFilePdf } from 'react-icons/fa'

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

              <h3>The Francis J. Monigan Memorial Scholarship</h3>
              <img src={fjmFather} style={{ margin: '20px', marginLeft: 0, marginBottom: 0, float: 'left', width: '300px' }} />
              <p>The Francis J. Monigan Memorial Scholarship has been established through the Phi Sigma Rho Foundation to further enable Mr. Monigan's legacy to keep helping and supporting 
              women in engineering in his name. The first little girl he helped to encourage into engineering was our University of Dayton &ndash; Gamma Chapter alumna (Xi class) sister Heather
              Monigan, with his encouraging words: "If you study engineering, you can afford your art supplies on the side."  Wise words; she actually listened. Heather followed in <em>both</em> her
              brother John's (also a University of Dayton graduate and Alpha class Phi Rho supporter) and father's footsteps, graduating with a Bachelor's in Computer Engineering (within the department
              of Electrical Engineering).</p>
              <p>Mr. Monigan earned his degreen in Electrical Engineering by going to night classes at City College of New York while juggling work and family. He chose this degree because it was the
              most difficult, and he knew it would make him a problem solver with skills applicable in any line of work. In some ways, Mr. Monigan was not your typical engineer, since he applied his
              degree in the financial industry, starting out (literally) in the mailroom of Wall Street and working his way up to the executive suites. (He was, however, a typical engineering in that
              he hated ordering pizza over the phone &ndash; a traid that both his kids inherited.) He wanted more for his kids and always emphasized the values of tenacity and grit. Throughout his career
              he mentored what some would classify as the "office outsiders", but Mr. Monigan just saw potential in many forms. If you worked hard and showed interest, he would take you under his wing, 
              regardless of who you were or where you came from. In many ways, he was a very old-fashioned man, but when he saw how interested his daughter was in math and science, he never once waivered
              in his determination to send his daughter to a four-year university, the first woman in the family.</p>
              <p>Mr. Monigan was a fairly quiet man, unless you asked him about his work, and then you would get a dissertation on stocks, bonds, market trends and interest rates; he loved his work, and
              he excelled at it. (Heather deeply regrets not listening more closely to the investment advice.) He was witty, enjoyed Star Trek, good food, baseball, and he could never pass by an animal
              without petting one. Heather always had a deeply special relationship with her dad and felt that he &ldquo;got&rdquo; her. He certainly understood how difficult engineering was, and he wanted
              her to be able to support herself.</p>
              <p>In the spring of 1999, Phi Sigma Rho enabled Heather to dance with her daddy at the Father Daughter Dance. Unfortunately, it was his last dance, as he passed away after a brave, but painfully
              short, battle with cancer on September 15, 1999. Mr. Monigan never saw his daughter graduate with her engineering degree that May, nor did he get to dance with her at her wedding, or see on
              Earth all the wonderful things the next twenty years of life blessed her with.</p>
              <p>In 2019, with the 20 year anniversary of his passing, his legacy will now enable the next round of young engineering women to follow their dreams in his name. Mr. Monigan knew how hard
              engineering was, and he wanted us all to stick with it!</p>

              <p><a href='/pdf/2020-fjm-memorial-scholarship-application.pdf'><FaFilePdf /> Download Application</a></p>

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
