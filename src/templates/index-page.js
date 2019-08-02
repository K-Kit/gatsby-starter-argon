import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql, useStaticQuery} from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Landing from '../views/examples/Landing'

// TODO content component to make markdown preview compatible
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  demoCards,
  featureSection
}) => (
  <div>
    {/*<Landing />*/}
  </div>
)

// IndexPageTemplate.propTypes = {
//   image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   heading: PropTypes.string,
//   subheading: PropTypes.string,
//   mainpitch: PropTypes.object,
//   description: PropTypes.string,
//   intro: PropTypes.shape({
//     blurbs: PropTypes.array,
//   }),
// }

const IndexPage = (props) => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          subheading
          demoCards {
            description
            heading
            link
            tags
            color
            icon
          }
          featureSection {
            description
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            link
            iconList {
              text
              color
              icon
            }
          }
          section3 {
            color
            description
            icon
            link
            tags
            heading
          }
          customerSection {
            description
            cardImage {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            cardTitle
            cardText
          }
        }
      }
    }
  `)
  const { frontmatter } = data.markdownRemark
  console.log(props)

  return (
    <Layout>
      <Landing
        {...frontmatter}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage
