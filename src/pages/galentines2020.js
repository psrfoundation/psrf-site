import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/Layout'

import galentine_2020 from '../img/galentines2020.jpg'

export default class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <h1>Galentine&rsquo;s Day</h1>
              <p>Celebrate your Phi Rho Love this season by sending a Galentine to your sister! For $10 each, the Phi Sigma Rho Foundation will send your personalized message to any Phi Rho
              sister on February 13. Donations must be made by the end of the day on February 9. Happy Galentine&rsquo;s Day!</p>

              <Link to='https://give.classy.org/GalentinesDay2020'>Donate Today!</Link>

              <p><img src={galentine_2020} alt="Galentine 2020" /></p>
              <p></p>

              <p><Link to='/'>← Go Home</Link></p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
