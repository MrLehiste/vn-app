import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReactPlayer from 'react-player/file'
import { css } from "@emotion/react"
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const BlogPost = ({ data }) => (
  
    <Layout>
      <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <img src={data.markdownRemark.frontmatter.image} alt={data.markdownRemark.frontmatter.title} width="400px" height="400px" css={css`margin-bottom: 0px;`} />
        <ReactPlayer forceAudio playing width="400px" height="60px" css={css`margin-bottom: 20px;`}
          controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
          url={data.markdownRemark.frontmatter.mp3}
        />
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </Layout>
)

export default withAuthenticationRequired(BlogPost)

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