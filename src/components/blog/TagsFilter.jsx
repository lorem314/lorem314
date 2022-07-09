import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  .tag-item {
    font-size: 1.25rem;
    margin-top: 0.75rem;
    margin-right: 0.75rem;
    line-height: 1.625;
    cursor: pointer;

    &.selected {
      .tag-name {
        background-color: hsl(200, 100%, 30%);
        color: whitesmoke;
      }
    }

    .tag-name {
      padding: 0.25em 0.5em;
      /* border: 1px solid black; */
      border-width: 1px;
      border-style: solid;
      border-color: ${props =>
        props.theme.preferDark ? "whitesmoke" : "black"};
      transition: border-color 0.25s ease-in;
      border-right: none;
    }
    .tag-count {
      /* border: 1px solid black; */
      border-width: 1px;
      border-style: solid;
      border-color: ${props =>
        props.theme.preferDark ? "whitesmoke" : "black"};
      transition: border-color 0.25s ease-in;

      border-left: none;
      padding: 0.25em 0.5em;
      background: #374151;
      color: #fff;
    }
  }
`

export default function TagsFilter({ tagCount, selected, setSelected }) {
  const handleSelect = tagName => () => {
    // const idx = selected.indexOf(tagName)
    // if (idx === -1) {
    //   setSelected([...selected, tagName])
    // } else {
    //   selected.splice(idx, 1)
    //   setSelected([...selected])
    // }
    if (selected === tagName) {
      setSelected("")
    } else {
      setSelected(tagName)
    }
  }

  return (
    <Wrapper>
      {Object.entries(tagCount).map(([tag, count]) => {
        const isSelected = tag === selected
        return (
          <div
            className={`tag-item ${isSelected && "selected"}`}
            key={tag}
            onClick={handleSelect(tag)}
          >
            <span className="tag-name">{tag}</span>
            <span className="tag-count">{count}</span>
          </div>
        )
      })}
    </Wrapper>
  )
}
