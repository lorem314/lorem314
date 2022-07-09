import React from "react"
import styled from "styled-components"

import Latest4BlogPost from "./home/Latest4BlogPost"
import Latest4BookChapter from "./home/Latest4BookChapter"
import SocialLinks from "./home/SocialLinks"

const Wrapper = styled.div`
  margin: 2rem auto 0;
  max-width: 42rem;
  padding: 0.5rem 1.5rem 2rem;

  background-color: var(--content-bg);
  transition: background-color 0.25s ease-in;

  .welcome {
    text-align: center;
  }
`

const HomePage = ({ latestBlogPosts = [], latestBookChapters = [] }) => {
  return (
    <Wrapper>
      <h2 className="welcome">
        <span role="img" aria-label="Party popper emojis">
          🎉
        </span>
        欢迎来到我的博客
        <span role="img" aria-label="Party popper emojis">
          🎉
        </span>
      </h2>

      <h3>最近发布文章</h3>
      <Latest4BlogPost latestBlogPosts={latestBlogPosts} />

      <h3>最近翻译书籍</h3>
      <Latest4BookChapter latestBookChapters={latestBookChapters} />

      <SocialLinks />
    </Wrapper>
  )
}

export default HomePage
