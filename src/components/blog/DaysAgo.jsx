import React from "react"
import styled from "styled-components"

const Wrapper = styled.p``

const DaysAgo = ({ created = Date.now() }) => {
  return (
    <Wrapper>
      发布于 <time dateTime={created}>{getDaysAgo(created)} 天前</time>
    </Wrapper>
  )
}

export default DaysAgo

const getDaysAgo = created => {
  return Math.floor((Date.now() - new Date(created)) / (1000 * 60 * 60 * 24))
}
