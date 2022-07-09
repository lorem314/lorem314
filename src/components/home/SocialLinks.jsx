import React from "react"
import styled from "styled-components"

import Bilibili from "../svg/Bilibili"
import Github from "../svg/Github"
import CodePen from "../svg/CodePen"
import CodeSandbox from "../svg/CodeSandbox"
import Steam from "../svg/Steam"

const Wrapper = styled.section`
  ul {
    padding-left: 0.5rem;
    list-style: none;
    margin: 0 1rem;
    li {
      display: flex;
      align-items: center;
      margin: 1rem 0;
      .svg-icon {
        width: 36px;
        height: 36px;
        padding: 4px;

        background-color: var(--svg-icon-bg);
        transition: background-color 0.25s ease-in;
        border-radius: 25%;
        :hover {
          background-color: var(--svg-icon-hover-bg);
          transition: none;
        }
      }
      a {
        margin-left: 1rem;
        font-size: 1.2rem;
      }
    }
  }
`

const SocialLinks = () => {
  return (
    <Wrapper>
      <h3>你也可以在以下地方找到我</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            {link.Icon}
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export default SocialLinks

const links = [
  // {
  //   href: "https://space.bilibili.com/7909744/",
  //   Icon: <Bilibili />,
  //   title: "Bilibili : lorem314",
  // },
  {
    href: "https://github.com/lorem314",
    Icon: <Github />,
    title: "Github : lorem314",
  },
  {
    href: "https://codepen.io/Number_DDD",
    Icon: <CodePen />,
    title: "Codepen : lorem314@Number_DDD",
  },
  {
    href: "https://codesandbox.io/u/lorem314",
    Icon: <CodeSandbox />,
    title: "CodeSandbox",
  },
  // {
  //   href: "https://steamcommunity.com/profiles/76561198174551770/",
  //   Icon: <Steam />,
  //   title: "Steam : Number_DDD",
  // },
]
