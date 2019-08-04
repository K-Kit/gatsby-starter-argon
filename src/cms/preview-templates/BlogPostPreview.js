import React from 'react'
import PropTypes from 'prop-types'
// import { BlogPostTemplate } from '../../templates/blog-post'

import  BlogPostTemplate from '../../views/BlogPost'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (
  <BlogPostTemplate
      {...data}
      content={data.body}
  />
)}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
