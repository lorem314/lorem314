import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  display: flex;
  .image-container {
    width: 220px;
  }
  .info {
    padding: 0 1rem;
  }
`

const BookCoverCard = ({ bookCover = {} }) => {
  const image = getImage(bookCover?.frontmatter?.coverImage)
  return (
    <Wrapper>
      <div className="image-container">
        <GatsbyImage
          image={image}
          alt={bookCover?.frontmatter?.title || "封面"}
        />
      </div>
      <div className="info">
        <h2>
          <Link to={bookCover.fields.slug}>{bookCover.frontmatter.title}</Link>
        </h2>
        <MDXRenderer>{bookCover.body}</MDXRenderer>
      </div>
    </Wrapper>
  )
}

export default BookCoverCard
