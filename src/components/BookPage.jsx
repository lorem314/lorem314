import React from "react"
import styled from "styled-components"

// import HeadTitle from "./ui/HeadTitle"
import BookCoverCard from "./book/BookCoverCard"

const Wrapper = styled.div`
  margin: 2rem auto 0;
  max-width: 42rem;
  padding: 0.5rem 1.5rem 2rem;

  background-color: var(--content-bg);
  transition: background-color 0.25s ease-in;

  .all-book-covers {
    display: flex;
    flex-direction: column;
    gap: 16px;

    max-width: 36rem;
    margin: 0 auto;
  }
`

const BookPage = ({ allBookCovers = [] }) => {
  return (
    <>
      {/* <HeadTitle subTitle="书籍" /> */}

      <Wrapper>
        <h2>书籍 ({allBookCovers.length})</h2>
        <div className="all-book-covers">
          {allBookCovers.map(bookCover => (
            <BookCoverCard key={bookCover.id} bookCover={bookCover} />
          ))}
        </div>
      </Wrapper>
    </>
  )
}

export default BookPage
