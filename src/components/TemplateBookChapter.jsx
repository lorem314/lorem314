import React from "react"
import styled from "styled-components"

// import HeadTitle from "./ui/HeadTitle"

// layout
import Pendant from "./article/Pendant"
import Content from "./article/Content"
import LinkedToc from "./article/LinkedToc"

// ui
import MediaDrawer from "./ui/MediaDrawer"
import MediaRenderer from "./ui/MediaRenderer"
import FixedIcon from "./styled/FixedIcon"

import TocIcon from "./svg/Toc"

import { bpRightDrawer, bpMobileSize } from "../styles/GlobalStyle"

const Wrapper = styled.div.attrs({
  className: "template",
})`
  margin: 2rem auto 0;
  max-width: 72rem; // maybe need change

  display: grid;
  gap: 12px;
  grid-template-columns: 3rem minmax(0, 1fr) minmax(0, 20rem);
  @media screen and (max-width: ${bpRightDrawer}px) {
    max-width: 48rem;
    grid-template-columns: 3rem minmax(0, 7fr);
  }
  @media screen and (max-width: ${bpMobileSize}px) {
    display: flex;
    flex-direction: column;
  }
`

const TemplateBookChapter = ({ bookChapter }) => {
  return (
    <>
      {/* <HeadTitle subTitle={bookChapter.frontmatter.title} /> */}

      <Wrapper>
        <Pendant />

        <div className="content-container">
          <Content {...bookChapter} />
        </div>

        <MediaRenderer mediaQuery={`(max-width: ${bpRightDrawer}px)`}>
          <aside className="toc-container">
            <LinkedToc {...bookChapter} />
          </aside>
          <MediaDrawer position="right">
            <FixedIcon position="right" zIndex={100}>
              <TocIcon />
            </FixedIcon>
            <TocInDrawer>
              <LinkedToc {...bookChapter} />
            </TocInDrawer>
          </MediaDrawer>
        </MediaRenderer>
        {/*  */}
      </Wrapper>
    </>
  )
}

export default TemplateBookChapter

const TocInDrawer = styled.aside`
  background-color: var(--content-bg);
  color: var(--main-text);
  height: 100vh;
  .linked-toc {
    max-height: 100vh;
  }
`
