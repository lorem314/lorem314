import { createGlobalStyle } from "styled-components"

const styled = { createGlobalStyle }

export const headerHeight = 50
export const bpLeftDrawer = 1440
export const bpRightDrawer = 1080
export const bpMobileSize = 768
export const leftDrawerWidth = 360

const GlobalStyle = styled.createGlobalStyle`
  :root {
    // size
    --header-height: ${headerHeight}px;

    // color
    --primary-text: ${props => (props.preferDark ? "#ffffff" : "#000000")};
    --secondary-text: ${props => (props.preferDark ? "#bebebe" : "#666666")};

    --header-bg: ${props => (props.theme.preferDark ? "#793698" : "#ac68cc")};
    --navbar-bg: ${props => (props.preferDark ? "#232323" : "#fdfdfd")};

    --svg-icon-bg: rgba(0, 0, 0, 0.075);
    --svg-icon-hover-bg: ${props =>
      props.preferDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)"};

    --content-bg: ${props => (props.preferDark ? "#222832" : "#ffffff")};
    --main-text: ${props => (props.preferDark ? "#f9ffee" : "#121212")};
    --bg-0: ${props => (props.preferDark ? "#191919" : "#e5e5e5")};
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 16px;
  }

  .svg-icon {
    width: 36px;
    height: 36px;
    cursor: pointer;
    display: block;
  }
  a {
    color: ${props => (props.preferDark ? "#ffa7c4" : "#d23669")};
    transition: color 0.25s ease-in;
    text-decoration: none;
  }
`

export default GlobalStyle
