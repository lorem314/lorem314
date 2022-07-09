import React from "react"
import styled from "styled-components"

const Svg = styled.svg.attrs({
  className: "svg-icon code-icon",
  width: "24px",
  height: "24px",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
})`
  path {
    stroke: ${props => (props.theme.preferDark ? "white" : "black")};
    transition: stroke 0.25s ease-in;
  }
`

const Code = props => {
  return (
    <Svg {...props}>
      <path
        fill="none"
        strokeWidth="1.5"
        d="M9,22 L15,2 M17,17 L22,12 L17,7 M7,17 L2,12 L7,7"
      />
    </Svg>
  )
}

export default Code
