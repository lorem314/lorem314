import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Tags from "../blog/Tags"

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  .chapter {
    margin-top: 1.5rem;
    .book-title {
      color: var(--secondary-text);
    }
    .chapter-title {
      margin: 0.25rem 0 1rem;
    }
  }
`

const Latest4BookChapter = ({ latestBookChapters }) => {
  return (
    <Wrapper>
      {latestBookChapters.map((chapter, index) => {
        return (
          <div key={index} className="chapter">
            <div className="book-title">{chapter.frontmatter.chapterOf}</div>
            <h4 className="chapter-title">
              <Link to={chapter.fields.slug}>
                第 {chapter.frontmatter.chapterNo} 章 -{" "}
                {chapter.frontmatter.title}
              </Link>
            </h4>
            <Tags tags={chapter.frontmatter.tags} />
          </div>
        )
      })}
    </Wrapper>
  )
}

export default Latest4BookChapter
