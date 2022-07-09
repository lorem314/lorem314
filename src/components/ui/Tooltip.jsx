import React from "react"
import styled from "styled-components"

/**
 * children length should be exactly 2.
 * children[0] :
 * children[1] : the tip, wrapper in a span element
 */

const Tooltip = ({ tip = "default tip", children = null }) => {
  if (
    !Object.prototype.toString.call(children).includes("Array") &&
    children?.length !== 2
  ) {
    throw Error("[Tooltip] Children length should be exactly 2.")
  }

  return <>{children[0]}</>
}

const TooltipAppender = () => {
  return null
}

export default Tooltip
