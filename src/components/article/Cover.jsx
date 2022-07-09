import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import defaultCover from "../../../static/images/cover/default-cover.jpg"

const Wrapper = styled.div``

const Cover = ({ showCover = true, unsplashUrl = "", coverImage = null }) => {
  const image = getImage(coverImage)

  // render cover from same folder
  if (coverImage) {
    return (
      <Wrapper>
        <GatsbyImage image={image} alt="cover" />
      </Wrapper>
    )
  }

  // render cover from unsplash
  if (unsplashUrl) {
    return (
      <Wrapper>
        <img
          className="default-cover"
          style={{
            width: "100%",
          }}
          src={unsplashUrl}
          alt="unsplash封面"
          onError={() => {
            this.src = defaultCover
          }}
        />
      </Wrapper>
    )
  }

  // render default cover from static folder
  return (
    <Wrapper>
      <img
        className="default-cover"
        style={{
          width: "100%",
        }}
        src={defaultCover}
        alt="默认封面"
      />
    </Wrapper>
  )
}

export default Cover
