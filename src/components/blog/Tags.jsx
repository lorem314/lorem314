import React from "react"
import styled from "styled-components"

const Wrapper = styled.div.attrs({
  className: "tags",
})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
`

const Tag = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  padding: 4px 5px;
`

const Tags = ({ tags = [] }) => {
  return (
    <Wrapper>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </Wrapper>
  )
}

export default Tags
