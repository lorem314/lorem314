import React from "react"
import styled from "styled-components"

const Svg = styled.svg.attrs({
  className: "svg-icon",
  width: "24px",
  height: "24px",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
})`
  path {
    fill: ${props => (props.theme.preferDark ? "white" : "black")};
    transition: fill 0.25s ease-in;
  }
`

const Top = props => {
  return (
    <Svg {...props}>
      <path d="M6 4h12v2H6zm.707 11.707L11 11.414V20h2v-8.586l4.293 4.293 1.414-1.414L12 7.586l-6.707 6.707z" />
    </Svg>
  )
}

export default Top
