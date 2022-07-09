import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//svg
import CodeIcon from "../components/svg/Code"
import ArticleIcon from "../components/svg/Article"
import BookIcon from "../components/svg/Book"
import SettingIcon from "../components/svg/Setting"

// latest article
import LatestBlogPost from "../components/blog/LatestBlogPost"
import LatestBookChapter from "../components/book/LatestBookChapter"

// break point

const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  bottom: 0;
  width: 320px;

  color: var(--primary-text);
  background-color: var(--content-bg);
  transition: color 0.25s ease-in, background-color 0.25s ease-in;

  @media screen and (max-width: 1080px) {
    width: min(320px, 80vw);
  }

  display: flex;

  .navigation {
    flex: 0 0 50px;
    padding-top: 1rem;

    /* color: whitesmoke; */
    background-color: var(--navbar-bg);
    transition: background-color 0.25s ease-in;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    a {
      border-radius: 25%;
      background-color: var(--svg-icon-bg);
      transition: background-color 0.25s ease-in;
      :hover {
        background-color: var(--svg-icon-hover-bg);
        transition: none;
      }
    }
  }
  .svg-icon {
    border-radius: 25%;
    padding: 6px;
  }
  .latest-articles {
    flex: 1 1 auto;
    overflow: auto;
    box-shadow: 0 1px 0 2px rgba(0, 0, 0, 0.05);
    padding: 0 0.5rem;
    margin: 10px 10px 0;
  }
`

const Navbar = ({ latestBlogPosts = [], latestBookChapters = [] }) => {
  return (
    <Wrapper>
      <nav className="navigation">
        <Link to="/">
          <CodeIcon />
        </Link>
        <Link to="/blog">
          <ArticleIcon />
        </Link>
        <Link to="/book">
          <BookIcon />
        </Link>
        {/* <Link to="/setting">
          <SettingIcon />
        </Link> */}
      </nav>
      <div className="latest-articles">
        <LatestBlogPost posts={latestBlogPosts} />
        <LatestBookChapter chapters={latestBookChapters} />
      </div>
    </Wrapper>
  )
}

export default Navbar
