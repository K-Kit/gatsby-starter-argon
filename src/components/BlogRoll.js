import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery, navigate } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import {Badge, Button, Card, CardBody, CardTitle, Col, Row} from "reactstrap";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
    <div className="wrapper">
      <div className="main">
        <div className="section section-white">
          {posts &&
          posts.map(({ node: post }) => (
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <Card className="card-blog card-plain text-center">
                    <div className="card-image">
                      <a href="#pablo" onClick={() => navigate(post.fields.slug)}>
                        {post.frontmatter.featuredimage ? (
                            <div className="featured-thumbnail">
                              <PreviewCompatibleImage
                                  imageInfo={{
                                    image: post.frontmatter.featuredimage,
                                    alt: `featured image thumbnail for post ${
                                        post.title
                                        }`,
                                  }}
                              />
                            </div>
                        ) : null}
                      </a>
                    </div>
                    <CardBody>
                      <div className="card-category">
                        <Badge className="main-tag" color="info">
                          Popular
                        </Badge>
                      </div>
                      <a href="javascrip: void(0);">
                        <CardTitle tag="h3">
                          {post.frontmatter.title}
                        </CardTitle>
                        <h6 className="title-uppercase">{post.frontmatter.date}</h6>
                      </a>
                      <div className="card-description">
                        <p>
                          {post.frontmatter.description}
                        </p>
                      </div>
                    </CardBody>
                    <Button className="btn-round" color="danger" size="sm" onClick={() => navigate(post.fields.slug)}>
                      Read more
                    </Button>
                  </Card>
                </Col>
              </Row>
          ))}
        </div>
      </div>
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                featuredpost
                description
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 860, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
