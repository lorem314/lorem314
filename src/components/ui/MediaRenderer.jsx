import { useState, useEffect, useLayoutEffect, useCallback } from "react"

/**
 * children length should be exactly 2.
 * children[0] : when mediaQuery matches, render first child
 * children[1] : when not matches, render second child
 */

const MediaRenderer = ({
  children = null,
  mediaQuery = "(max-width: 1080px)",
}) => {
  if (
    !Object.prototype.toString.call(children).includes("Array") &&
    children.length !== 2
  ) {
    throw Error("[MediaRenderer] Children length should be exactly 2.")
  }

  const [isMatch, setIsMathch] = useState(true)

  const handleWindowResize = useCallback(() => {
    if (window.matchMedia(mediaQuery).matches) {
      setIsMathch(false)
    } else {
      setIsMathch(true)
    }
  }, [mediaQuery])

  useLayoutEffect(() => {
    if (window.matchMedia(mediaQuery).matches) {
      setIsMathch(false)
    }
  }, [mediaQuery, handleWindowResize])

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize)
    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [mediaQuery, handleWindowResize])

  return isMatch ? children[0] : children[1]
}

export default MediaRenderer
