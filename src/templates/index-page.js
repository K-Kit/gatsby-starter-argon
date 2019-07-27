import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql, useStaticQuery} from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Landing from '../views/examples/Landing'
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
            imageSide
            link
            iconList {
              text
              color
              icon
            }
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
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        demoCards={frontmatter.demoCards}
        featureSection={frontmatter.featureSection}
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
//
// export const pageQuery = graphql`
// query IndexPageTemplate {
//   markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
//     frontmatter {
//       title
//       image {
//         childImageSharp {
//           fluid(maxWidth: 2048, quality: 100) {
//             ...gatsbyImageSharpFluid
//           }
//         }
//       }
//       heading
//       subheading
//       demoCards {
//         description
//         heading
//         link
//         tags
//       }
//       featureSection {
//         description
//         image {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...gatsbyImageSharpFluid
//             }
//           }
//         }
//         imageSide
//         link
//       }
//     }
//   }
// }
// `
