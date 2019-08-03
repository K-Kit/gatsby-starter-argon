import React from 'react'
import PropTypes from 'prop-types'
import {isEditor} from "../utils";
import ReactMarkdown from "react-markdown";

export const PreviewCompatibleContent = ({ content, ...props}) => {
  return (
      <>
        {isEditor ?
            <ReactMarkdown source={content} {...props}  />:
            <HTMLContent {...props} />
        }
      </>
  )
}

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

// export const MarkdownContent =

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
