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

const Back = props => {
  return (
    <Svg {...props}>
      <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z" />
    </Svg>
  )
}

export default Back
