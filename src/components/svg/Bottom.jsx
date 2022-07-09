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

const Bottom = () => {
  return (
    <Svg>
      <path d="M6 18h12v2H6zm5-14v8.586L6.707 8.293 5.293 9.707 12 16.414l6.707-6.707-1.414-1.414L13 12.586V4z" />
    </Svg>
  )
}

export default Bottom
