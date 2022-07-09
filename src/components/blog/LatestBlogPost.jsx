import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Tags from "./Tags"

const Wrapper = styled.section`
  .posts {
    padding: 0 0.5rem;

    .post {
      .title {
        margin-bottom: 0.5rem;
      }
      /* margin-bottom: 2rem; */
      /* padding: 0.25rem 0; */
      /* box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
        rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px; */
    }
  }
`

const LatestBlogPost = ({ posts }) => {
  return (
    <Wrapper>
      <h3>最新发布博客</h3>
      <div className="posts">
        {posts.map((post, index) => {
          return (
            <div className="post" key={index}>
              <h4 className="title">
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </h4>
              <Tags tags={post.frontmatter.tags} />
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default LatestBlogPost
