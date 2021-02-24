import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReactPlayer from 'react-player/file'
import { css } from "@emotion/react"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <img src={post.frontmatter.image} alt={post.frontmatter.title} width="400px" height="400px" css={css`margin-bottom: 0px;`} />
        <ReactPlayer forceAudio playing width="400px" height="60px" css={css`margin-bottom: 20px;`}
          controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
          url={post.frontmatter.mp3}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        image
        mp3
        title
      }
    }
  }
`