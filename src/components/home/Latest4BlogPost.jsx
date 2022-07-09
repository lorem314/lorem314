import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import DaysAgo from "../blog/DaysAgo"
import Tags from "../blog/Tags"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 90%;

  article {
    /* border: 1px solid grey; */
    margin: 1rem 0;
    display: flex;
    flex-direction: row;

    .cover-container {
      .gatsby-image-wrapper {
        width: 200px;
      }
      flex-basis: 200px;
    }
    .frontmatter-container {
      padding: 0 1rem;
      .title {
        margin: 0.5rem 0;
      }
    }
  }
`

const Latest4BlogPost = ({ latestBlogPosts }) => {
  return (
    <Wrapper>
      {latestBlogPosts.map(post => {
        const image = getImage(post.frontmatter.coverImage)

        return (
          <article key={post.id}>
            <div className="cover-container">
              <GatsbyImage image={image} alt="cover" />
            </div>
            <div className="frontmatter-container">
              <h4 className="title">
                <a href={post.fields.slug}>{post.frontmatter.title}</a>
              </h4>
              <DaysAgo created={post.frontmatter.created} />
              <Tags tags={post.frontmatter.tags} />
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

export default Latest4BlogPost
