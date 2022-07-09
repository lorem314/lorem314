import React from "react"
import styled from "styled-components"

const Svg = styled.svg.attrs({
  className: "svg-icon",
  width: "28px",
  height: "28px",
  viewBox: "0 0 28 28",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
})`
  path {
    fill: ${props => (props.theme.preferDark ? "white" : "black")};
    transition: fill 0.25s ease-in;
  }
`

const Menu = props => {
  return (
    <Svg>
      <path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" />
      <path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" />
      <path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" />
    </Svg>
  )
}

export default Menu
