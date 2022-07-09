import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { connect } from "react-redux"

// layout
import Header from "./Header"
import Navbar from "./Navbar"
import Logo from "./Logo"

// ui and styled component
import MediaDrawer from "../components/ui/MediaDrawer"
import MediaRenderer from "../components/ui/MediaRenderer"
import NavbarWithLogo from "../components/styled/NavbarWithLogo"
import FixedIcon from "../components/styled/FixedIcon"

// svg
import MenuIcon from "../components/svg/Menu"

// css
import GlobalStyle, { bpLeftDrawer } from "../styles/GlobalStyle"
import "prismjs/themes/prism-solarizedlight.css"
import "../styles/custom-prismjs.css"
import "../styles/typography.css"

const Wrapper = styled.div`
  main {
    position: absolute;
    top: 50px;
    left: 320px;
    bottom: 0;
    right: 0;
    @media screen and (max-width: ${bpLeftDrawer}px) {
      left: 0;
    }

    .main-content {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      padding: 0 1rem;

      overflow-y: auto;
      scroll-behavior: smooth;

      background-color: var(--bg-0);
      color: var(--main-text);
      transition: color 0.25s ease-in, background-color 0.25s ease-in;

      :fullscreen {
        .template {
          max-width: 90vw;
        }
      }
    }
  }
`

// 需要 预留出 右抽屉 按钮的 url pattern
const urlPattern = [
  /\/blog\/(.*)\//gm,
  /\/blog\/(.*)\/(.*?)/gm,
  /\/book\/(.*?)\//gm,
  /\/book\/(.*?)\/(.*?)\//gm,
]

function Layout({
  children = null,
  theme = "light",
  location = {},
  latestBlogPosts = [],
  latestBookChapters = [],
}) {
  const preferDark = theme === "dark"

  // pathname that need spare space for right drawer button
  let hasRightBtn = false
  urlPattern.forEach(regex => {
    if (!hasRightBtn) {
      if (regex.test(location.pathname)) {
        hasRightBtn = true
      }
    }
  })

  return (
    <ThemeProvider theme={{ preferDark }}>
      <GlobalStyle preferDark={preferDark} />

      <Wrapper>
        <Header hasRightBtn={hasRightBtn} />

        <MediaRenderer mediaQuery={`(max-width: ${bpLeftDrawer}px)`}>
          <Navbar
            latestBlogPosts={latestBlogPosts}
            latestBookChapters={latestBookChapters}
          />
          <MediaDrawer position="left">
            <FixedIcon position="left" zIndex={100}>
              <MenuIcon />
            </FixedIcon>
            <NavbarWithLogo>
              <Logo />
              <Navbar
                latestBlogPosts={latestBlogPosts}
                latestBookChapters={latestBookChapters}
              />
            </NavbarWithLogo>
          </MediaDrawer>
        </MediaRenderer>

        <main>
          <div id="main-content" className="main-content">
            {children}
          </div>
        </main>
      </Wrapper>
    </ThemeProvider>
  )
}

export default connect(
  state => ({
    theme: state.theme,
  }),
  null
)(Layout)
