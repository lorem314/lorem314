import React from "react"

const PlainToc = ({ tableOfContents }) => {
  return (
    <div>
      <Items items={tableOfContents.items} />
    </div>
  )
}

const Items = ({ url = "", title = "", items = [] }) => {
  if (items.length !== 0 && title === "") {
    return (
      <ul>
        {items.map(item => {
          return <Items {...item} key={item.title} />
        })}
      </ul>
    )
  }
  if (items.length !== 0 && title !== "") {
    return (
      <li>
        {title}

        <ul>
          {items.map(item => {
            return <Items {...item} key={item.title} />
          })}
        </ul>
      </li>
    )
  }
  if (items.length === 0) {
    return <li>{title}</li>
  }
  return null
}

export default PlainToc
