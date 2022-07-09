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

const Fullscreen = props => {
  return (
    <Svg {...props}>
      <path d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z" />
    </Svg>
  )
}
export default Fullscreen
