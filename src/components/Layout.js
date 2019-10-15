import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './all.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Helmet>
          {/*<html lang='en' />*/}
          <title>{data.site.siteMetadata.title}</title>
          <meta name='description' content={data.site.siteMetadata.description} />

          {/*<!-- Reactstrap / Bootstrap CSS -->*/}
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>

          <link rel='apple-touch-icon' sizes='180x180' href='/img/apple-touch-icon.png' />
          <link rel='icon' type='image/png' href='/img/favicon-32x32.png' sizes='32x32' />
          <link rel='icon' type='image/png' href='/img/favicon-16x16.png' sizes='16x16' />

          <link rel='mask-icon' href='/img/safari-pinned-tab.svg' color='#ff4400' />

          {/*<!-- Tekton Pro (Bold) -->*/}
          <link rel="stylesheet" href="https://use.typekit.net/veu6xzn.css" />
          <link href='https://fonts.googleapis.com/css?family=Quicksand|Rock+Salt' rel='stylesheet' />



          <meta name='theme-color' content='#fff' />

          <meta property='og:type' content='business.business' />
          <meta property='og:title' content={data.site.siteMetadata.title} />
          <meta property='og:url' content='/' />
          <meta property='og:image' content='/img/og-image.jpg' />

          {/* Bulma Override Hack */}
          <style type="text/css">{`
            .dropdown-item {
              font-size: 1rem;
            }
            .dropdown-item:active {
              background-color: red;
            }
            a {
              color: #1086c8;
            }
            a:hover {
              color: #5989c9;
            }
          `}</style>
            
        </Helmet>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    )}
  />
)

export default TemplateWrapper
