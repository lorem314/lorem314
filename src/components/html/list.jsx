import React from "react"
import styled from "styled-components"

const StyledUl = styled.ul`
  > li {
    margin: 0.25rem 0;
  }
`
export const Ul = props => <StyledUl {...props}>{props.children}</StyledUl>

const StyledOl = styled.ol`
  /* font-size: 1.125rem; */
  > li {
    margin: 0.25rem 0;
  }
`
export const Ol = props => <StyledOl {...props}>{props.children}</StyledOl>
