import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/Layout'

import psrf_logo_square from '../img/psrf_logo_square.png'
import janelle from '../img/psrf/board/janelle.jpg'
import rosie from '../img/psrf/board/rosie.jpg'
import lexi from '../img/psrf/board/lexi.jpg'

export default class VolunteersPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <h1>Volunteers &amp; Board of Directors</h1>
              <p>
                The Foundation is governed by nine volunteer Board of Directors, who serve four year terms with a limit of 12 consecutive years of service.
              </p>
              <h2>Board of Directors</h2>
              <div className='board-volunteers-grid-container'>
                <div className='board-volunteers'>
                  <img src={janelle} />
                  <h4>Janelle Becker</h4>
                  <div>President</div>
                  <small>Beta – The Ohio State University</small>
                  <small><a href='mailto:president@phisigmarhofoundation.org'>president@phisigmarhofoundation.org</a></small>
                </div>
                <div className='board-volunteers'>
                  <img src='https://placehold.it/200x200' />
                  <h4>Cailin Kilduff Stine</h4>
                  <div>Vice President of Strategy</div>
                  <small>Gamma - University of Dayton</small>
                  <small><a href='mailto:strategy@phisigmarhofoundation.org'>strategy@phisigmarhofoundation.org</a></small>
                </div>
                <div className='board-volunteers'>
                  <img src='https://placehold.it/200x200' />
                  <h4>Elana Chapman</h4>
                  <div>Vice President of Donor Engagement</div>
                  <small>Gamma - The University of Dayton</small>
                  <small><a href='mailto:donorengagement@phisigmarhofoundation.org'>donorengagement@phisigmarhofoundation.org</a></small>
                </div>
                <div className='board-volunteers'>
                  <img src='https://placehold.it/200x200' />
                  <h4>Kendall Murphy</h4>
                  <div>Vice President of Publicity</div>
                  <small>Epsilon - University of Kentucky</small>
                  <small><a href='mailto:publicity@phisigmarhofoundation.org'>publicity@phisigmarhofoundation.org</a></small>
                </div>
                <div className='board-volunteers'>
                  <img src='https://placehold.it/200x200' />
                  <h4>Victoria Platt</h4>
                  <div>Vice President of Programming</div>
                  <small>Beta – The Ohio State University</small>
                  <small><a href='mailto:programming@phisigmarhofoundation.org'>programming@phisigmarhofoundation.org</a></small>
                </div>
                <div className='board-volunteers'>
                  <img src='https://placehold.it/200x200' />
                  <h4>Ashley Mohler</h4>
                  <div>Vice President of Development</div>
                  <small>Alpha Zeta - Wright State University</small>
                  <small><a href='mailto:development@phisigmarhofoundation.org'>development@phisigmarhofoundation.org</a></small>
                </div>
                <div className='board-volunteers'>
                  <img src={rosie} />
                  <h4>Rosalie Krob</h4>
                  <div>Treasurer</div>
                  <small>Alpha – Purdue University</small>
                  <small><a href='mailto:treasurer@phisigmarhofoundation.org'>treasurer@phisigmarhofoundation.org</a></small>
                </div>
                <div className='board-volunteers'>
                  <img src={lexi} />
                  <h4>Alexis Heironimus</h4>
                  <div>Secretary</div>
                  <small>Alpha Zeta – Wright State University</small>
                  <small><a href='mailto:secretary@phisigmarhofoundation.org'>secretary@phisigmarhofoundation.org</a></small>
                </div>
                <div className='board-volunteers'>
                  <img src={psrf_logo_square} />
                  <h4>Kathy Lyall</h4>
                  <div>Ex-Officio</div>
                  <small>Gamma – University of Dayton</small>
                  <small><a href='mailto:exofficio@phisigmarhofoundation.org'>exofficio@phisigmarhofoundation.org</a></small>
                </div>
              </div>

              <h2>Volunteers</h2>
              <div className='board-volunteers-grid-container'>
                <div className='board-volunteers'>
                  <img src='http://placehold.it/200x200' style={{ display: 'none' }} />
                  <h4>Cassie Smith</h4>
                  <div>Alumnae Relations Chair</div>
                  <span></span>
                  <small><a href='mailto:alumnaerelations@phisigmarhofoundation.org'>alumnaerelations@phisigmarhofoundation.org</a></small>
                </div>
                <div className='board-volunteers'>
                  <img src='http://placehold.it/200x200' style={{ display: 'none' }} />
                  <h4>Chloe Heddan</h4>
                  <div>Collegiate Affairs</div>
                  <span></span>
                  <small><a href='mailto:collegiateaffairs@phisigmarhofoundation.org'>collegiateaffairs@phisigmarhofoundation.org</a></small>
                </div>
                <div className='board-volunteers'>
                  <img src='http://placehold.it/200x200' style={{ display: 'none' }} />
                  <h4>Belle Reiman</h4>
                  <div>HR Manager</div>
                  <span></span>
                  <small><a href='mailto:hrmanager@phisigmarhofoundation.org'>hrmanager@phisigmarhofoundation.org</a></small>
                </div>
                <div className='board-volunteers'>
                  <img src='http://placehold.it/200x200' style={{ display: 'none' }} />
                  <h4>Nicole Graf</h4>
                  <div>Philanthropy Chair</div>
                  <span></span>
                  <small><a href='mailto:philanthropy2@phisigmarhofoundation.org'>philanthropy2@phisigmarhofoundation.org</a></small>
                </div>
                <div className='board-volunteers'>
                  <img src='http://placehold.it/200x200' style={{ display: 'none' }} />
                  <h4>Devin Stanke</h4>
                  <div>Philanthropy Chair for Light the Night</div>
                  <span></span>
                  <small><a href='mailto:philanthropy@phisigmarhofoundation.org'>philanthropy@phisigmarhofoundation.org</a></small>
                </div>
                <div className='board-volunteers'>
                  <img src='http://placehold.it/200x200' style={{ display: 'none' }} />
                  <h4>Kat Wenger</h4>
                  <div>Webmaster</div>
                  <span></span>
                  <small><a href='mailto:webmaster@phisigmarhofoundation.org'>webmaster@phisigmarhofoundation.org</a></small>
                </div>
                <div className='board-volunteers'>
                  <img src='http://placehold.it/200x200' style={{ display: 'none' }} />
                  <h4>Victoria Platt</h4>
                  <div>Scholarship Chair</div>
                  <span></span>
                  <small><a href='mailto:scholarship@phisigmarhofoundation.org'>scholarship@phisigmarhofoundation.org</a></small>
                </div>
                <div className='board-volunteers'>
                  <img src='http://placehold.it/200x200' style={{ display: 'none' }} />
                  <h4>Charlene Yauch</h4>
                  <div>Investments Chair</div>
                  <span></span>
                  <small><a href='mailto:investments@phisigmarhofoundation.org'>investments@phisigmarhofoundation.org</a></small>
                </div>
                <div className='board-volunteers'>
                  <img src='http://placehold.it/200x200' style={{ display: 'none' }} />
                  <h4>Christine Jackson</h4>
                  <div>Assistant Treasurer</div>
                  <span></span>
                  <small><a href='mailto:assistanttreasurer@phisigmarhofoundation.org'>assistanttreasurer@phisigmarhofoundation.org</a></small>
                </div>
              </div>

              <br />

              <h2>Committees</h2>
              <div id="committees" style={{margin: '5px'}}>
                <h4>Scholarship Committee</h4>
                <div>Katie Shesko, Julie Hayden, Beth Holloway, Anita Jean</div>
                <br/>
                <h4>Investment Committee</h4>
                <div>Kathy Bradley, Katie Shesko</div>
                <br/>
                <h4>Publicity Committee</h4>
                <div>Hannah Stone, Lipi Agrawal, Tara Zahnke</div>
              </div>

              <div className='red-section section full-width-image-container'>
                <section className='container' style={{ textAlign: 'center' }}>
                  <h2>Volunteer with Us!</h2>
                  <p>Interested in becoming a volunteer of the Foundation? Contact <a style={{ color: 'inherit', wordBreak: 'break-word' }} href='mailto:hrmanager@phisigmarhofoundation.org'><u>hrmanager@phisigmarhofoundation.org</u></a> to find out about the available positions.</p>
                </section>
              </div>

              <div>
                <h2>Keep in Mind!</h2>
                <ul>
                  <li>Officers are elected every odd year before Convention by the incumbent Board of Directors. A nominating committee is used to find and recruit the best volunteers beginning in February, and applications and interviews are required. All applicants are notified in May of the Board’s decision.</li>
                  <li>Volunteers are needed throughout the year, and positions under officers and on committees are posted as needed. Some volunteer opportunities are seasonal and may require more work during a specific period of time.</li>
                </ul>
              </div>

              <br />
              <p><Link to='/'>← Go Home</Link></p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
