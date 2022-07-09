import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Tags from "./Tags"
import DaysAgo from "./DaysAgo"

const Wrapper = styled.div`
  /* border: 1px solid rgba(0, 0, 0, 0.5); */
  padding: 0 1rem;
  .title {
    margin-bottom: 0.5rem;
  }
`

const BlogPostCard = ({ post }) => {
  return (
    <Wrapper>
      <h2 className="title">
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
      </h2>
      <Tags tags={post.frontmatter.tags} />
      <DaysAgo created={post.frontmatter.created} />
    </Wrapper>
  )
}

export default BlogPostCard
