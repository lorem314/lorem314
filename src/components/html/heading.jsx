import React from "react"
import styled from "styled-components"

/**
 * h2
 */
const StyledH2 = styled.h2`
  margin-top: 3.5rem;
  margin-bottom: 1rem;
  font-size: 2.454rem;
  display: flex;
  & + h3 {
    margin-top: 1rem;
  }
  a.gatsby-header-autolink {
    transform: translateY(6px);
    svg {
      width: 2.454rem;
      height: 2.454rem;
    }
  }
`
export const H2 = props => <StyledH2 {...props}>{props.children}</StyledH2>

/**
 * h3
 */
const StyledH3 = styled.h3`
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 1.618rem;
  display: flex;

  & + h4 {
    margin-top: 1rem;
  }
  a.gatsby-header-autolink {
    transform: translateY(4px);
    svg {
      width: 1.618rem;
      height: 1.618rem;
    }
  }
`
export const H3 = props => <StyledH3 {...props}>{props.children}</StyledH3>

/**
 * h4
 */
const StyledH4 = styled.h4`
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-size: 1.517rem;
  display: flex;

  a.gatsby-header-autolink {
    transform: translateY(2px);
    svg {
      width: 1.517rem;
      height: 1.517rem;
    }
  }
`
export const H4 = props => <StyledH4 {...props}>{props.children}</StyledH4>

/**
 * p
 */
const StyledP = styled.p`
  margin: 1rem 0;
  line-height: 1.5;
  letter-spacing: 1px;
`
export const P = props => <StyledP {...props}>{props.children}</StyledP>
