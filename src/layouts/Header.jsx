import React from "react"
import styled from "styled-components"

import Logo from "./Logo"
import ThemeToggle from "../components/ui/ThemeToggle"
import {
  bpLeftDrawer,
  bpRightDrawer,
  bpMobileSize,
} from "../styles/GlobalStyle"
import BilibiliIcon from "../components/svg/Bilibili"
import CodeSandboxIcon from "../components/svg/CodeSandbox"

/* background-color: rebeccapurple; */
/* background-color: #793698; */
/* background-color: #9744be; */
/* background-color: #ac68cc; */
/* background-color: #2c5c97; */
/* background-color: #1a2c42; */

const Wrapper = styled.header`
  background-color: var(--header-bg);
  color: whitesmoke;
  transition: color 0.25s ease-in, background-color 0.25s ease-in;

  height: var(--header-height);
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${bpLeftDrawer}px) {
    padding-left: 50px;
  }
  ${props =>
    props.hasRightFixedBtn &&
    `
    @media screen and (max-width: ${bpRightDrawer}px) {
      padding-right: 50px;
    }
    `}

  .title {
    margin: 0;
    font-size: 1.5rem;
    user-select: none;
  }

  .links {
    margin: 0 0.5rem;
    flex: 1 0 auto;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    a {
      margin: 0 0.5rem;
      display: flex;
      align-items: flex-end;
      color: #e8e8e8;
      :hover {
        text-decoration: underline;
      }
      .svg-icon {
        width: 22px;
        height: 22px;
      }
      > span {
        margin-left: 0.25rem;
        @media screen and (max-width: ${bpMobileSize}px) {
          display: none;
        }
      }
    }
  }
  .tools {
    flex: 0 0 auto;
  }
`

const Header = ({ hasRightBtn }) => {
  return (
    <Wrapper hasRightFixedBtn={hasRightBtn}>
      <Logo />
      <div className="links">
        <a href="/">
          <BilibiliIcon color="#2c5c97" />
          <span>Bilibili</span>
        </a>
        <a href="/">
          <CodeSandboxIcon />
          <span>Code Sandbox</span>
        </a>
      </div>
      <div className="tools">
        <ThemeToggle size={24} gap={4} />
      </div>
    </Wrapper>
  )
}

export default Header
