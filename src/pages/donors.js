import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/Layout'

import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default class DonorsPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <h1>Donor Recognition</h1>
              <p>The Phi Sigma Rho Foundation is pleased to recognize Annual &amp; Lifetime Giving Clubs.</p>
              <p>Annual gifts to Phi Sigma Rho Foundation are a tax-deductible way to demonstrate your belief in the promise and potential of the women of Phi Sigma Rho.  Unrestricted annual donations are used to fund Fraternity grants, operating costs and the vital programs that make our mission possible. Because of the generous support of donors who give annually, we are able to make an immediate impact on the Sorority, her members and the larger community.</p>

              <p>Cumulative annual gifts to Foundation between a calendar year are joined in our Annual Giving Clubs. Donors cumulative lifetime giving to any fund within the Foundation are recognized in our Lifetime Giving Societies.</p>

              <p>Collegiates and recent grads can also get involved in donor programs, with our Penguin Pals Program (P3) and the After the Cap &amp; Gown Program. After a collegiate giving level is met, sisters our recognized for their support with a charm.</p>
              <br />
              <div>
                <div className='container'>
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}><h3 style={{ margin: 0 }}>Annual Giving Clubs</h3></ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <table>
                        <tr><td>Sigmand Club</td><td>$50</td></tr>
                        <tr><td>Key Club</td><td>$100</td></tr>
                        <tr><td>Pyramid Club</td><td>$150</td></tr>
                        <tr><td>Pearl Club</td><td>$500</td></tr>
                        <tr><td>Rising Sun Club</td><td>$1,000</td></tr>
                        <tr><td>1984 Club</td><td>$1,984</td></tr>
                        <tr><td>Loyalty Club</td><td>$2,500</td></tr>
                        <tr><td>Prosperity Club</td><td>$5,000</td></tr>
                        <tr><td>Star Club</td><td>$10,000</td></tr>
                      </table>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>

                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}><h3 style={{ margin: 0 }}>Lifetime Giving Societies</h3></ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <table>
                        <tr><td>Engagement Society</td><td>$2,500</td></tr>
                        <tr><td>Scholarship Society</td><td>$5,000</td></tr>
                        <tr><td>Visionary Society</td><td>$10,000</td></tr>
                        <tr><td>Influencer Society</td><td>$25,000</td></tr>
                        <tr><td>Changemaker Society</td><td>$50,000</td></tr>
                        <tr><td>Founders Society</td><td>$100,000</td></tr>
                        <tr><td>Silver Society</td><td>$250,000</td></tr>
                        <tr><td>Platinum Society</td><td>$500,000</td></tr>

                        <tr><td>Order of the Orchid</td><td>$1,000,000</td></tr>
                      </table>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>

                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}><h3 style={{ margin: 0 }}>Circle of Contributions</h3></ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <p>Donors become a member of the Circle of Contributions after giving an annual gift of any size for five consecutive years.  The Foundation is thankful for the continued support of our donors over the years.</p>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>

                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}><h3 style={{ margin: 0 }}>Collegiate Programs</h3></ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{ display: 'block' }}>
                      <p><b>The Penguin Pals Program</b> is designed for all college students! We understand that money can be tight in college! Any undergraduate donor who contributes a total of $101 during their active membership will receive a silver penguin charm.</p>
                      <p><b>After the Cap-and-Gown</b> is designed for recent Phi Sigma Rho alumnae. Donors who make donations of at least $300 within five years of graduation from any undergraduate program will receive a silver pyramid charm.</p>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              </div>
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
