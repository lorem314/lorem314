import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.div.attrs({
  className: "logo",
})`
  background-color: var(--header-bg);
  color: var(--logo-text);
  transition: color 0.25s ease-in, background-color 0.25s ease-in;

  line-height: 50px;

  a {
    text-decoration: none;
  }
  .title {
    margin: 0;
    padding-left: 6px;
    /* font-family: "Exe Pixel Perfect", "Times New Roman", Times, serif; */
    font-size: 1.5rem;
    /* font-weight: lighter; */
    /* letter-spacing: -2px; */

    color: whitesmoke;
    transition: color 0.25s ease-in;
    text-decoration: none;
  }
`

const Logo = () => {
  return (
    <Wrapper>
      <Link to="/">
        <h1 className="title">Lorem314's Blog</h1>
      </Link>
    </Wrapper>
  )
}

export default Logo
