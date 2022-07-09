import React from "react"
import styled from "styled-components"

// import HeadTitle from "./ui/HeadTitle"

import Pendant from "./article/Pendant"
import Content from "./article/Content"
import LinkedToc from "./article/LinkedToc"

import MediaDrawer from "./ui/MediaDrawer"
import MediaRenderer from "./ui/MediaRenderer"
import FixedIcon from "./styled/FixedIcon"

import TocIcon from "./svg/Toc"

import { bpRightDrawer, bpMobileSize } from "../styles/GlobalStyle"

const Wrapper = styled.div.attrs({
  className: "template",
})`
  margin: 2rem auto 0;
  max-width: 72rem; // meybe need change

  display: grid;
  gap: 12px;
  grid-template-columns: 3rem minmax(0, auto) minmax(0, 20rem);
  @media screen and (max-width: ${bpRightDrawer}px) {
    max-width: 48rem;
    grid-template-columns: 3rem minmax(0, 7fr);
  }
  @media screen and (max-width: ${bpMobileSize}px) {
    display: flex;
    flex-direction: column;
  }
`

const TemplateBlogPost = ({ post = {} }) => {
  return (
    <>
      {/* <HeadTitle subTitle={post.frontmatter.title} /> */}

      <Wrapper>
        <Pendant />

        <div className="content-container">
          <Content {...post} />
        </div>

        <MediaRenderer mediaQuery={`(max-width: ${bpRightDrawer}px)`}>
          <aside className="toc-container">
            <LinkedToc {...post} />
          </aside>
          <MediaDrawer position="right">
            <FixedIcon position="right" zIndex={100}>
              <TocIcon />
            </FixedIcon>
            <TocInDrawer>
              <LinkedToc {...post} />
            </TocInDrawer>
          </MediaDrawer>
        </MediaRenderer>
        {/*  */}
      </Wrapper>
    </>
  )
}

export default TemplateBlogPost

const TocInDrawer = styled.aside`
  background-color: var(--content-bg);
  color: var(--main-text);
  height: 100vh;
  .linked-toc {
    max-height: 100vh;
  }
`
