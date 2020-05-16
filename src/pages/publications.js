import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class PublicationsPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <h1 className='has-text-weight-bold is-size-2'>Publications</h1>

              {/*<p>Each year we publish a report of our accomplishments and financial impact to Phi Sigma Rho.</p>*/}

              <p className='publications magazine'>
                <b><i>The Key Magazine</i> of Phi Sigma Rho</b><br />
                <a href="http://phisigmarho.org/sites/default/files/flipbooks/PSRMagazineSpring2019/">Spring 2019</a>,&nbsp;
                  <a href="http://phisigmarho.org/sites/default/files/flipbooks/PSRMagazine2018Fall/">Fall 2018</a>,&nbsp;
                  <a href="http://phisigmarho.org/sites/default/files/flipbooks/PSRMagazineSpring2018/">Spring 2018</a>,&nbsp;
                  <a href="http://phisigmarho.org/sites/default/files/flipbooks/PSRMagazineFall2017/">Fall 2017</a>,&nbsp;
                  <a href="http://phisigmarho.org/sites/default/files/flipbooks/PSRMagazineSpring2017/#p=1">Spring 2017</a>,&nbsp;
                  <a href="http://phisigmarho.org/sites/default/files/flipbooks/PSRMagazineFall2016/mobile/index.html#p=1">Fall 2016</a>,&nbsp;
                  <a href="http://phisigmarho.org/sites/default/files/flipbooks/PSRMagazineSpring2016/#p=1">Spring 2016</a>
              </p>

              <p className='publications annual-reports'>
                <b>Annual Reports</b><br />
                <a href="https://www.yumpu.com/en/document/fullscreen/63370362/annual-report-2019-4">2019</a>, <a href="pdf/2018-annual-report.pdf">2018</a>, <a href="pdf/2017-annual-report.pdf">2017</a>, <a href="pdf/2016-annual-report.pdf">2016</a>, <a href="pdf/2015-annual-report.pdf">2015</a>, <a href="pdf/2014-annual-report.pdf">2014</a>, <a href="pdf/2013-annual-report.pdf">2013</a>, <a href="pdf/2012-annual-report.pdf">2012</a>, <a href="pdf/2011-annual-report.pdf">2011</a>, <a href="pdf/2010-annual-report.pdf">2010</a>, <a href="pdf/2009-annual-report.pdf">2009</a>, <a href="pdf/2008-annual-report.pdf">2008</a>, <a href="pdf/2007-annual-report.pdf">2007</a>, <a href="pdf/2006-annual-report.pdf">2006</a>, <a href="pdf/2005-annual-report.pdf">2005</a>
              </p>

              <h1 className='has-text-weight-bold is-size-2'>News &amp; Updates</h1>
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
                ))}
            </div>
          </div>

        </section>
      </Layout>
    )
  }
}

PublicationsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export const pageQuery = graphql`
  query NewsQueryA {
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
