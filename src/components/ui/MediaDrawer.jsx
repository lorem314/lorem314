import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"

import FixedIcon from "../styled/FixedIcon"
import CloseIcon from "../svg/Close"

/**
 * children length should be exactly 2.
 * children[0] : should be an icon, add onClick event to open the drawer
 * children[1] : should be the drawer content
 */

const MediaDrawer = ({ position = "left", children = null }) => {
  if (
    !Object.prototype.toString.call(children).includes("Array") &&
    children?.length !== 2
  ) {
    throw Error("[MediaDrawer] Children length should be exactly 2.")
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && (
        <DrawerAppender
          position={position}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          {children[1]}
        </DrawerAppender>
      )}
      {React.cloneElement(children[0], {
        onClick: () => {
          setIsOpen(true)
        },
      })}
    </>
  )
}

function initialOffsetX(position) {
  switch (position) {
    case "left":
      return -100
    case "right":
      return 100
    default:
      return -100
  }
}

const DrawerAppender = ({ position, isOpen, setIsOpen, children }) => {
  const [styles, setStyles] = useState({
    opacity: 0,
    offsetX: initialOffsetX(position),
  })

  useEffect(() => {
    Promise.resolve().then(() => {
      setTimeout(() => {
        setStyles({
          ...styles,
          offsetX: 0,
          opacity: 1,
        })
      }, 0)
    })
  }, [])

  const closeDrawer = () => {
    Promise.resolve()
      .then(() => {
        return new Promise(resolve => {
          setStyles({
            offsetX: initialOffsetX(position),
            opacity: 0,
          })
          setTimeout(() => {
            resolve()
          }, 250)
        })
      })
      .then(() => {
        setIsOpen(false)
      })
  }

  return ReactDOM.createPortal(
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        transition: "opacity 0.25s ease-in-out",
        opacity: `${styles.opacity}`,
        overflow: "hidden",
        backdropFilter: "blur(2px)",
        zIndex: 200,
      }}
      onClick={closeDrawer}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          [position]: 0,
          bottom: 0,
          width: `320px`,
          background: "#fff",
          transition: "transform 0.25s ease",
          transform: `translateX(${styles.offsetX}%)`,
          boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.25)",
        }}
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <FixedIcon position={position} zIndex={300} onClick={closeDrawer}>
          <CloseIcon />
        </FixedIcon>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default MediaDrawer
