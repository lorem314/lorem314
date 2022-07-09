import * as React from "react"
import styled from "styled-components"

import useLocalStorage from "../hook/useLocalStorage"
import { connect } from "react-redux"
import { changeTheme } from "../../redux/creator"

const Wrapper = styled.div`
  --size: ${props => `${props.size}px`};
  --radius: ${props => `${props.size || 32 / 2}px`};
  --gap: ${props => `${props.gap}px`};

  display: flex;
  position: relative;
  padding: var(--gap);
  border-radius: var(--radius);
  background-color: #0f1114;
  cursor: pointer;
  :focus {
    .slider {
      box-shadow: 2px 2px 3px 4px rgba(255, 167, 196, 0.6),
        -2px -2px 3px 4px rgba(255, 167, 196, 0.6),
        2px -2px 3px 4px rgba(255, 167, 196, 0.6),
        -2px 2px 3px 4px rgba(255, 167, 196, 0.6);
    }
  }

  svg {
    padding: var(--gap);
    width: var(--size);
    height: var(--size);
  }

  .slider {
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background-color: whitesmoke;
    position: absolute;
    transition: transform 250ms ease-in-out;
    transform: translateX(0);
    ${props => props.preferDark && `transform: translateX(100%);`}
  }
`

const ThemeToggle = ({
  size = 26,
  gap = 2,
  theme = "light",
  onChangeTheme = () => {},
}) => {
  const [storedTheme, setStoredTheme] = useLocalStorage(
    "lorem314-blog-theme",
    "light"
  )
  const preferDark = storedTheme === "dark" ? true : false

  React.useLayoutEffect(() => {
    onChangeTheme(storedTheme)
  }, [])

  const onToggle = () => {
    if (preferDark) {
      setStoredTheme("light")
      onChangeTheme("light")
    } else {
      setStoredTheme("dark")
      onChangeTheme("dark")
    }
  }

  return (
    <Wrapper
      preferDark={preferDark}
      size={size}
      gap={gap}
      tabIndex="0"
      onClick={onToggle}
    >
      <MoonIcon />
      <SunIcon />
      <div className="slider" />
    </Wrapper>
  )
}

export default connect(
  state => ({
    theme: state.theme,
  }),
  dispatch => ({
    onChangeTheme(theme) {
      dispatch(changeTheme(theme))
    },
  })
)(ThemeToggle)
// export default ThemeToggle

const MoonIcon = () => {
  return (
    <svg
      className="moon-icon"
      width="32px"
      height="32px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <path
        d="M43.1 2c3.2 4.8 5.1 10.6 5.1 16.8C48.3 35.5 34.6 49 17.7 49C12 49 6.6 47.4 2 44.7C7.2 55 17.9 62 30.3 62C47.8 62 62 48 62 30.7C62 17.9 54.2 6.9 43.1 2z"
        fill="#ffce31"
      ></path>
    </svg>
  )
}
const SunIcon = () => {
  return (
    <svg
      className="sun-icon"
      width="32px"
      height="32px"
      viewBox="0 0 330 330"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <g>
        <path
          fill="#FFB65B"
          d="M321.708,151.584l-56.326-28.164l19.915-59.743c1.797-5.39,0.394-11.333-3.624-15.35   s-9.964-5.42-15.35-3.624L206.579,64.62L178.416,8.292C175.876,3.21,170.682,0,165,0s-10.876,3.21-13.416,8.292L123.421,64.62   L63.677,44.704c-5.392-1.797-11.333-0.394-15.35,3.624c-4.018,4.018-5.421,9.96-3.624,15.35l19.914,59.743L8.292,151.584   C3.209,154.125,0,159.319,0,165c0,5.682,3.209,10.876,8.292,13.417l56.325,28.163l-19.914,59.743   c-1.797,5.39-0.394,11.332,3.624,15.35c4.017,4.018,9.96,5.42,15.35,3.624l59.744-19.913l28.163,56.325   C154.124,326.79,159.318,330,165,330s10.876-3.21,13.416-8.291l28.163-56.325l59.744,19.913c5.388,1.797,11.333,0.394,15.35-3.624   c4.018-4.018,5.421-9.96,3.624-15.35l-19.915-59.743l56.326-28.163C326.789,175.876,330,170.682,330,165   C330,159.319,326.789,154.125,321.708,151.584z"
        />
        <path
          fill="#FFA828"
          d="M321.708,151.584l-56.326-28.164l19.915-59.743c1.797-5.39,0.394-11.333-3.624-15.35   s-9.964-5.42-15.35-3.624L206.579,64.62L178.416,8.292C175.876,3.21,170.682,0,165,0v75v180v75c5.682,0,10.876-3.21,13.416-8.291   l28.163-56.325l59.744,19.913c5.388,1.797,11.333,0.394,15.35-3.624c4.018-4.018,5.421-9.96,3.624-15.35l-19.915-59.743   l56.326-28.163C326.789,175.876,330,170.682,330,165C330,159.319,326.789,154.125,321.708,151.584z"
        />
        <path
          fill="#FFDE51"
          d="M165,75c-49.627,0-90,40.374-90,90c0,49.627,40.373,90,90,90c49.625,0,90-40.373,90-90   C255,115.374,214.625,75,165,75z"
        />
        <path
          fill="#FFD400"
          d="M165,75v180c49.625,0,90-40.373,90-90C255,115.374,214.625,75,165,75z"
        />
      </g>
    </svg>
  )
}
