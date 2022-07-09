import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

const Wrapper = styled.section`
  margin-top: 2rem;
  .chapters {
    padding: 0 0.5rem;

    .chapter {
      margin-top: 1.5rem;
      .title {
        color: #333;
      }
      .subtitle {
        margin: 0.5rem 0;
      }
      /* margin-bottom: 2rem; */
      /* padding: 0.25rem 2rem; */
      /* box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
        rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px; */
    }
  }
`

const LatestBookChapter = ({ chapters }) => {
  return (
    <Wrapper>
      <h3>最新翻译书籍</h3>
      <div className="chapters">
        {chapters.map((chapter, index) => {
          return (
            <div className="chapter" key={index}>
              <small className="title">{chapter.frontmatter.chapterOf}</small>
              <h4 className="subtitle">
                <Link to={chapter.fields.slug}>
                  第 {chapter.frontmatter.chapterNo} 章{" - "}
                  {chapter.frontmatter.title}
                </Link>
              </h4>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default LatestBookChapter
