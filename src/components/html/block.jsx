import React from "react"
import styled from "styled-components"

import pngTip from "../../../static/tip.png"
import pngNote from "../../../static/note.png"
import pngCaution from "../../../static/caution.png"

/**
 * tip
 */
const StyledTip = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 2rem 0;
  padding: 0 2rem;
  /* border: 1px solid #009d77; */
  > img {
    width: 120px;
  }
  > div {
    padding: 0 1rem;
  }
`
export const Tip = ({ children }) => {
  return (
    <StyledTip>
      <img src={pngTip} alt="green-squirrel" />
      <div>{children}</div>
    </StyledTip>
  )
}

/**
 * note
 */
const StyledNote = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 2rem 0;
  padding: 0 2rem;
  /* border: 1px solid #43538f; */
  > img {
    width: 120px;
  }
  > div {
    padding: 0 1rem;
  }
`
export const Note = ({ children }) => {
  return (
    <StyledNote>
      <img src={pngNote} alt="blue-bird" />
      <div>{children}</div>
    </StyledNote>
  )
}

/**
 * caution
 */
const StyledCaution = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 2rem 0;
  padding: 0 2.5rem;
  /* border: 1px solid #e8673e; */
  > img {
    width: 120px;
  }
  > div {
    padding: 0 1rem;
  }
`
export const Caution = ({ children }) => {
  return (
    <StyledCaution>
      <img src={pngCaution} alt="orange-scorpion" />
      <div>{children}</div>
    </StyledCaution>
  )
}

/**
 * border block
 */
const StyledBorderBlock = styled.div`
  border: 1px solid black;
  margin: 1rem 0;
  padding: 1rem;
`

export const BorderBlock = ({ children }) => {
  return <StyledBorderBlock>{children}</StyledBorderBlock>
}
