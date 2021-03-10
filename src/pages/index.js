import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

import Instafeed from 'instafeed.js'
// import { FacebookProvider, Page } from 'react-facebook'
// import Button from '@material-ui/core/Button';

import header from '../img/header-grads-trimmed-2.png'

import scholarships from '../img/psrf/scholarships.jpg'
import publications from '../img/psrf/publications.png'
import philanthropy from '../img/psrf/philanthropy.png'

export default class IndexPage extends React.Component {

  constructor(props) {
    super(props)
    /* Instagram (Uses instafeed.js) */
    const feed = new Instafeed({
      get: 'user',
      userId: '1441765604',
      //clientId: '1819a410b0e245eabd157558a0c1840d',
      //accessToken: '1441765604.1819a41.f5cbf0c0e447426f921122493606938b',
      clientId: '1819a410b0e245eabd157558a0c1840d',
      accessToken: 'a235b84b9d944151b48974de1dbde423',
      resolution: 'low_resolution',
      limit: 15,
      template: '<a href="{{link}}"><img style="width: 170px; height: 170px" src="{{image}}" /></a>'
    })
    feed.run()

    /* Facebook (not in use) */
    /*
    window.fbAsyncInit = function () {
      FB.init({
        appId: '2172632326351188',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.2'
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk')); */
  }

  componentDidMount() {

  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>

        <Helmet />

        <section className=''>
          <div className='container'>
            <div className=''>
              <div className=''>
                <div className='column no-padding is-10 is-offset-1'>
                  <div className='content'>
                    <div
                      className='full-width-image-container homepage-hero margin-top-0 margin-bottom-0'
                      style={{
                        backgroundImage: `url(${
                          header
                          })`
                      }}
                    >
                      <h2
                        className='has-text-weight-bold is-size-1'
                        style={{
                          color: 'white',
                          marginBottom: 0
                        }}
                      >
                        {/*
                        <div style={{ textAlign: 'center' }}>Phi Sigma Rho</div>
                        <div style={{ textAlign: 'center' }}>Foundation</div>
                      */}
                      </h2>
                    </div>
                    <div className='section'>
                      <h2 className='has-text-weight-semibold is-size-2'>
                        Building the future, together.
                      </h2>
                      <p>Founded in 2005, the Phi Sigma Rho Foundation supports members and friends of Phi Sigma Rho Sorority by providing professional, educational, philanthropic, and leadership development opportunities. We strive to be the philanthropy of choice for all Phi Rhos.</p>
                      <p className='margin-bottom-0'>The Phi Sigma Rho Foundation is an independent 501(c)(3) nonprofit organization in accordance with the Internal Revenue Code. Though a separate organization, the Phi Sigma Rho Foundation was formed to support the educational and charitable interests of the Phi Sigma Rho sisterhood.</p>
                    </div>
                    <div className='full-width-image-container margin-top-0 margin-bottom-0 red-section section'>
                      <section className='container' style={{ textAlign: 'center' }}>
                        <h2 className='is-size-2'>Give to Phi Sigma Rho</h2>
                        <p>Almost all of our funds are given back to Phi Rho’s through scholarships and LEAP programming. Your support of the Foundation helps ensure that Sisters of Phi Sigma Rho across the country receive the support they need to become the best women that they can be.</p>
                        <br />
                        <Link to='/giving' className='button is-large is-rounded' style={{ fontWeight: 'normal', color: 'white', backgroundColor: 'rgba(255,255,255,0)', border: '3px white solid', borderRadius: 0 }}>Donate Today!</Link>
                        <br />
                        <br />
                        <br />
                        <a href='https://www.classy.org/campaign/phi-sigma-rho-foundation-16th-anniversary-campaign/c327874' className='button is-large is-rounded' style={{ fontWeight: 'normal', color: 'white', backgroundColor: 'rgba(255,255,255,0)', border: '3px white solid', borderRadius: 0 }}>16th Anniversary Campaign</a>
                        <br />
                        <br />
                        <br />
                        <small className='irs-info'>The Phi Sigma Rho Foundation is a charitable organization as described in section 501(c)(3) of the Internal Revenue Code. All donations to the Phi Sigma Rho Foundation are tax deductible.</small>
                      </section>
                    </div>
                    <div className='section' style={{ padding: '4rem 0rem' }}>
                      <div className=''>
                        <div className='columns'>
                          <div className='column has-text-centered'>
                            <div>
                              <img src={scholarships} className='circle' />
                              <p className='title'><Link to='/scholarships'>Scholarships</Link></p>
                              <p className=''>Apply for scholarships exclusively for members of Phi Sigma Rho. Applications are due March 1st!</p>
                            </div>
                          </div>
                          <div className='column has-text-centered'>
                            <div>
                              <img src={publications} className='circle' />
                              <p className='title'><Link to='/publications'>Publications</Link></p>
                              <p className=''>Your gift makes a difference in our sisters' lives. Learn about your impact to Phi Sigma Rho Foundation's programs in our Annual Report!</p>
                            </div>
                          </div>
                          <div className='column has-text-centered'>
                            <div>
                              <img src={philanthropy} className='circle' />
                              <p className='title'><Link to='/philanthropy'>Light the Night</Link></p>
                              <p className=''>Walk with the Foundation this fall! Create or join a Phi Sigma Rho team now to support the Leukemia and Lymphoma Society.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*
                    <div style={{ "textAlign": "center", "marginTop": "50px" }}>
                      <div style={{ "marginLeft": "auto", "marginRight": "auto" }}>
                        <script src="https://donorbox.org/widget.js" paypalexpress="false"></script>
                        <iframe src="https://donorbox.org/embed/psrf" height="685px" width="100%"
                          style={{
                            "maxWidth": "425px",
                            "maxHeight": "none!important"
                          }} seamless="seamless" name="donorbox" frameBorder="0" scrolling="no" allowpaymentrequest></iframe>
                      </div>
                    </div> */}
                    {/* INSTAGRAM */}
                    <div id='instafeed' style={{ textAlign: 'center', width: '100%' }} />
                    {/* FACEBOOK (Note! react-facebook doesnt seem to be working) */}
                    {/* <FacebookProvider appId="2172632326351188"> */}
                    {/* <Page href="https://www.facebook.com/PSRFoundation/" width="500px" height="500px" adaptContainerWidth="600px" tabs="timeline" /> */}
                    {/* </FacebookProvider> */}
                    {/* Alternative: <div className="fb-page" data-href="https://www.facebook.com/PSRFoundation/" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"></div> */}
                    <h2 className='has-text-weight-semibold is-size-2'>
                      {'News & Updates'}
                    </h2>
                    {/* <p className='is-size-5'>{'Recent updates from our ladies'}</p> */}
                    {posts
                      .map(({ node: post }) => (
                        <div
                          className='content'
                          style={{ border: '1px solid #333', padding: '2em 4em' }}
                          key={post.id}
                        >
                          <p>
                            <Link className='has-text-primary' to={post.fields.slug}>
                              {post.frontmatter.title}
                            </Link>
                            <small style={{ display: 'block', fontSize: '1rem' }}>{post.frontmatter.date}</small>
                          </p>
                          <p>
                            {post.excerpt}
                            <br />
                            <br />
                            <Link className='button is-small' to={post.fields.slug}>
                              Keep Reading →
                            </Link>
                          </p>
                        </div>
                      )).slice(0, 3)}
                    <Link to='/publications'>More Publications →</Link>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout >
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
