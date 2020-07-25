import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/Layout'

import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import group_photo from "../img/group_photo.png"

export default class GivingPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <h1>Giving</h1>
              <p>Your gift helps to build the future for women in engineering across the nation.</p>
              <p>By giving to the Phi Sigma Rho Foundation, donors show they are personally committed to developing the Phi Sigma Rho sisterhood and overall achievement of women in engineering. Every gift, at any amount, supports educational and leadership opportunities offered to our sisters and the philanthropic efforts of Phi Sigma Rho.</p>
              <p>The Phi Sigma Rho Foundation is exempt from federal income tax under Internal Revenue Code section 501(c)(3). Donations to the foundation are tax-deductible as provided by law.</p>

              <img src={group_photo}  style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}} />
              
              <h2 style={{ marginBottom: '24px', marginTop: '48px' }}>Ways to Give</h2>
              <h3>Give Online!</h3>
              <p>Giving online is quick, easy, and secure. You can make both one-time and recurring gift, as well as pledges and endowments.</p>
              <br />
              <a href='https://www.classy.org/give/238204/#!/donation/checkout' className='button is-large is-rounded' style={{ fontFamily: 'Quicksand', fontWeight: 'bold', display: 'block', color: '#8e2344', backgroundColor: 'white', border: '3px #8e2344 solid', borderRadius: 0, marginLeft: 'auto', marginRight: 'auto', width: '40%', minWidth: '200px' }}>Donate Now!</a>
              <br />
              <p style={{fontStyle: 'italic', fontSize: 'small', marginLeft: 'auto', marginRight: 'auto', width: '40%', minWidth: '200px'}}>Clicking the above link will redirect to you to the website for Classy. Classy is an online fundraising platform and payment processor used by the Phi Sigma Rho Foundation.</p>
              <br />
              <h3>Give by Mail</h3>
              <p>To give a gift by mail, please send a check or money order to Phi Sigma Rho Foundation,  PO Box 7021, Westchester, IL 60154.</p>
              <h3>Matching Gift</h3>
              <p>Your employer, or your spouse's employer, may offer a gift matching program, which could match, double or more to your gift. Each company has its own guidelines for gift matching programs.</p><p>If you have any questions, please contact Christine Jackson at <a href='mailto:assistanttreasurer@phisigmarhofoundation.org' style={{ wordWrap: 'break-word' }}>assistanttreasurer@phisigmarhofoundation.org</a>.</p>
              <h3>Recurring Gift</h3>
              <p>A monthly gift to the Phi Sigma Rho Foundation is an easy and convenient way to support the sisterhood. Start your recurring gift today!</p>
              <br />
              <a href='https://www.classy.org/give/238204/#!/donation/checkout' className='button is-large is-rounded' style={{ fontFamily: 'Quicksand', fontWeight: 'bold', display: 'block', color: '#8e2344', backgroundColor: 'white', border: '3px #8e2344 solid', borderRadius: 0, marginLeft: 'auto', marginRight: 'auto', width: '40%', minWidth: '200px' }}>Donate Now!</a>
              <br />
              <h3>Pledges and Endowments Gifts</h3>
              <p>Spreading out your payments on a large gift through a pledge—a formal agreement to make a gift to the Foundation—is a wonderful way to reach a more generous goal with regular payments over time. What is more, each payment on your pledge is eligible for an income-tax charitable deduction. Like all gifts, pledges can be designated to a specific fund or program.</p>
              <p>The Phi Sigma Rho Foundation also accepts endowment gifts. Unlike gifts for current use, endowment gifts provide security over the long term by expanding the Foundation’s permanent financial base and creating a predictable source of future income for such things as endowed scholarships.</p>
              <p>Please contact <a href="mailto:donorengagement@phisigmarhofoundation.org">donorengagemenet@phisigmarhofoundation.org</a> for more information today!</p>
              <h3>Amazon Smile</h3>
              <p>Amazon will donate 0.5% of the price of your eligible AmazonSmile purchases to the charitable organization of your choice. Support our sisterhood by shopping at <a href="https://smile.amazon.com" target="_blank" rel="noopener noreferrer">smile.amazon.com</a> and choosing the Phi Sigma Rho Foundation as the benefiting charitable organization.</p>
              <h3>Planned Giving through a Bequest</h3>
              <h4 style={{fontFamily: 'Quicksand'}}>How it works:</h4>
              <p>Include the Phi Sigma Rho Foundation (PO Box 7021, Westchester, IL 60154) as a beneficiary in your estate plan.  If desired, direct how you would like the gift to be used, or, you can make an unrestricted gift to support the Foundation, which will be used to support the organization’s goals wherever the need is greatest.</p>
              <p>Please let us know that you’ve chosen to give to the Foundation through a bequest; email <a style={{wordBreak: 'break-word'}} href="mailto:donorengagement@phisigmarhofoundation.org">donorengagement@phisigmarhofoundation.org</a>. We would love to say thank you for your support and generosity!</p>
              <br />
              <h4 style={{fontFamily: 'Quicksand'}}>Benefits:</h4>
              <ul>
                <li>Your assets remain in your control during your lifetime.</li>
                <li>You can modify your bequest if your circumstances change.</li>
                <li>You can direct your bequest to a particular purpose.</li>
                <li>There is currently no limit on the estate tax deductions that can be taken for charitable bequests.</li>
                <li>You can have the satisfaction of knowing that your bequest will benefit the sisters of Phi Sigma Rho, helping to sustain the organization in the future.</li>
                <li>If you have already decided to include the Phi Sigma Rho Foundation in your will, let us know so that we can recognize you through our lifetime giving program.</li>
                <li>Information contained on this website is not a substitute for professional counsel. Appropriate legal, tax, accounting and/or financial assistance should be sought in connection with any planned giving.</li>
              </ul>
              <h3>Stock or Security Gift</h3>
              <p>Making a charitable donation in the form of stock shares rather than cash can greatly benefit both the Phi Sigma Rho Foundation and you.  As a stock donor, the value of the donation can be deducted as a charitable gift if you itemize deductions on Schedule A, and you avoid paying the capital gains tax on the appreciated stock!  For the Foundation, a stock donation expands and diversifies our investment portfolio and gives us the option to use the stock for long-term growth or to sell the shares to satisfy a more immediate financial need.</p><p>The Phi Sigma Rho Foundation has an investment account established through Waukesha Investments. If you would like to make a donation of stock to the Foundation, please have your broker or financial advisor contact Waukesha Investments at (262) 549-8596.</p>
              <div>
                <h2 style={{ marginBottom: '24px', marginTop: '48px', textAlign: 'center' }}>Frequently Asked Questions</h2>
                <div className='container'>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}><h3 style={{ margin: 0 }}>Are my gifts to the Phi Sigma Rho Foundation tax deductible?</h3></ExpansionPanelSummary>
                  <ExpansionPanelDetails style={{ display: 'block' }}>
                    <p>Yes - The Phi Sigma Rho Foundation is recognized by the IRS as a 501(c)(3) charitable organization, which means that all gifts to the Foundation are tax-exempt to the fullest extent allowed by law.</p>
                    <p>Our federal tax identification number is <b>20-2709091</b>.</p>
                  </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}><h3 style={{ margin: 0 }}>Can I write a check to the Phi Sigma Rho Foundation?</h3></ExpansionPanelSummary>
                  <ExpansionPanelDetails style={{ display: 'block' }}>
                    <p>Yes - Please make your check out to the Phi Sigma Rho Foundation. We are unable to process checks written to other organizations.</p>
                    <p>If you would like to restrict your gift to a specific fund or campaign, or if you are giving on behalf of a Phi Sigma Rho chapter or alumnae organization, please make note in the memo field on the check.</p>
                  </ExpansionPanelDetails>
                </ExpansionPanel>


                <ExpansionPanel style={{ display: 'block' }}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}><h3 style={{ margin: 0 }}>What does my donation support?</h3></ExpansionPanelSummary>
                  <ExpansionPanelDetails style={{ display: 'block' }}>
                    <p>You can apply your donations to different Foundation funds and programs by marking your gifts as unrestricted or restricted.</p>
                    <p><b>Unrestricted gifts</b> are among the most valuable to the Foundation because they allow us to allocate the funds wherever the need is greatest. These gifts to the annual fund not only support the Foundation’s vital programs, but also fund the Foundation needs to be able to administer our vital programs.</p>
                    <p><b>Restricted gifts</b> allow you to designate your gift to a specific program, grant, scholarship or endowment. When you designate your gift, you enjoy the satisfaction of knowing you are supporting a program that is personally meaningful to you.</p>
                  </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel style={{ display: 'block' }}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}><h3 style={{ margin: 0 }}>What funds can I restrict my gift towards?</h3></ExpansionPanelSummary>
                  <ExpansionPanelDetails style={{ display: 'block' }}>
                    <p>There are six funds that you can designate towards:</p>
                    <ul>
                      <li>General Fund (unrestricted) - The General Fund allows your gift to be used for the area of greatest need. As an unrestricted gift, your donation can be used on all Foundation operations or programming, from LEAP sessions at convention or conference, or towards one of our scholarships.</li>
                      <li>LEAP Fund (restricted) - This is the current area of greatest need. LEAP stands for Leadership, Educational, And Professional programming. This fund covers the grants that fund professional speakers and educational programming at conferences and conventions, and with more support, LEAP could become a recognized professional program. By donating towards the LEAP fund, your gift impacts the most sisters overall.</li>
                      <li>Scholarship Fund (restricted) - The Scholarship Fund is a restricted for the support to any of our scholarships needing funding, including the Leadership, Merit, and Philanthropy and Service scholarships. Specific funds may be created to finance additional scholarships as we work towards endowing each for our future, as is with:</li>
                      <ul>
                        <li>Sarah Rogers McClure Memorial Scholarship Fund (restricted)</li>
                        <li>Francis J. Monigan Memorial Scholarship Fund (restricted)</li>
                        <li>Anne Louise Roach Memorial Scholarship Fund (restricted)</li>
                      </ul>
                      <li>Professional Services &amp; Paid Staff Fund (restricted) - This fund supports Foundation operations in the use of third party services, such as lawyers, accountants, or marketing services. This fund also supports future hopes to have paid staff members, such as an executive director.</li>
                    </ul>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                </div>
              </div>
            </div>
            <br />
            <p><Link to='/'>← Go Home</Link></p>
          </div>
        </section>
      </Layout>
    )
  }
}
