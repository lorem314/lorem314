import React from "react"
import styled from "styled-components"

import BackIcon from "../svg/Back"
import TopIcon from "../svg/Top"
import FullscreenIcon from "../svg/Fullscreen"
import BottomIcon from "../svg/Bottom"

import { bpMobileSize } from "../../styles/GlobalStyle"

const Wrapper = styled.aside.attrs({
  className: "pendant-container",
})`
  display: flex;
  justify-content: center;

  .pendants {
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 12px;
    @media screen and (max-width: ${bpMobileSize}px) {
      display: none;
    }
  }

  .svg-icon {
    padding: 6px;
    width: 36px;
    height: 36px;
    border-radius: 25%;
    background-color: var(--svg-icon-bg);
    transition: background-color 0.25s ease-in;
  }

  @media screen and (max-width: ${bpMobileSize}px) {
    justify-content: flex-start;

    .pendants {
      position: initial;
      flex-direction: row;
    }
  }
`

const Pendant = () => {
  const goBack = () => {
    window.history.back()
  }

  const toTop = () => {
    document.getElementById("main-content").scrollTo(0, 0)
  }

  const openFullscreen = () => {
    const elem = document.getElementById("main-content")
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen()
    }
  }

  return (
    <Wrapper>
      <div className="pendants">
        <BackIcon onClick={goBack} />
        <TopIcon onClick={toTop} />
        <FullscreenIcon onClick={openFullscreen} />
        {/* <BottomIcon /> */}
      </div>
    </Wrapper>
  )
}

export default Pendant
