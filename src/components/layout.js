import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import LoginButton from "../components/loginbutton"
import LogoutButton from "../components/logoutbutton"

import { rhythm } from "../utils/typography"
export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <nav css={css`float: right;`}>
        <LoginButton />&nbsp;&nbsp;
        <LogoutButton />&nbsp;&nbsp;
        <Link to={`/profile/`}>Profile</Link>&nbsp;&nbsp;
        <Link to={`/about/`}>About</Link>
      </nav>
      {children}
    </div>
  )
}