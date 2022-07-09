import React from "react"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import Tags from "../blog/Tags"
import Cover from "./Cover"
import DaysAgo from "../blog/DaysAgo"

import { H2, H3, H4, P } from "../html/heading"
import { Ol, Ul } from "../html/list"

const Wrapper = styled.div`
  background-color: var(--content-bg);
  transition: background-color 0.25s ease-in;

  padding: 0.25rem 1.5rem; // need apply in nested body

  /* font-size: 1.125rem; */

  .title {
    font-size: 2.618rem;
    margin: 1rem 0;
  }

  // 图片 上边距
  .gatsby-resp-image-wrapper {
    margin: 1.5rem 0;
  }
  .default-cover {
    width: 100%;
  }
`

const components = {
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  p: props => <P {...props} />,
  ul: props => <Ul {...props} />,
  ol: props => <Ol {...props} />,
  // strong: props => <Strong {...props} />,
}

const Content = ({ frontmatter, body }) => {
  return (
    <>
      <Cover
        showCover={true}
        unsplashUrl={frontmatter.unsplashUrl}
        coverImage={frontmatter.coverImage}
      />

      <Wrapper>
        <h1 className="title">
          {frontmatter?.chapterNo ? `第 ${frontmatter.chapterNo} 章 - ` : null}
          {frontmatter.title}
        </h1>
        <DaysAgo created={frontmatter.created} />
        <Tags tags={frontmatter.tags} />
        <hr />
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Wrapper>
    </>
  )
}

export default Content

const getDaysAgo = created => {
  return Math.floor((Date.now() - new Date(created)) / (1000 * 60 * 60 * 24))
}
