import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import HeadTitle from "./ui/HeadTitle"

import PlainToc from "./book/PlainToc"

const Wrapper = styled.div`
  margin: 2rem auto 0;
  max-width: 42rem;
  padding: 1.5rem;

  background-color: var(--content-bg);
  transition: background-color 0.25s ease-in;

  display: flex;
  .image-container {
    width: 240px;
  }
  .info {
    padding: 0 1rem;
    flex: 1 0 auto;
    .chapter-list {
      font-size: 1.125rem;
      list-style-type: none;
      > li {
        margin: 1rem 0;
      }
    }
    summary {
      cursor: pointer;
    }
  }
  ul {
    padding-left: 1.25rem;
  }
`

const TemplateBookCover = ({ bookCover = {}, bookChapters = [] }) => {
  const image = getImage(bookCover?.frontmatter?.coverImage)
  console.log("chapters :", bookChapters)
  return (
    <>
      {/* <HeadTitle subTitle={bookCover.frontmatter.title} /> */}

      <Wrapper>
        <div className="image-container">
          <GatsbyImage
            image={image}
            alt={bookCover?.frontmatter?.title || "封面"}
          />
        </div>
        <div className="info">
          <h2>{bookCover?.frontmatter?.title}</h2>
          <ul className="chapter-list">
            {bookChapters.map((bookChapter, index) => {
              return (
                <li key={index}>
                  <details open>
                    <summary>
                      <Link to={bookChapter.fields.slug}>
                        第 {bookChapter?.frontmatter?.chapterNo} 章{" - "}
                        {bookChapter.frontmatter.title}
                      </Link>
                    </summary>
                    <PlainToc tableOfContents={bookChapter.tableOfContents} />
                  </details>
                </li>
              )
            })}
          </ul>
        </div>
      </Wrapper>
    </>
  )
}

export default TemplateBookCover
