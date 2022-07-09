import React from "react"
import styled from "styled-components"

const Wrapper = styled.div.attrs({
  id: "toc",
  className: "linked-toc",
})`
  background-color: var(--content-bg);
  transition: background-color 0.25s ease-in;

  padding: 1rem;
  max-height: calc(80vh - 2rem - 50px);
  overflow-y: auto;

  position: fixed;
  display: block;
  width: 20rem;
  user-select: none;

  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  ul {
    margin: 0.5rem 0;
    padding-left: 1.25rem;
    list-style: none;
  }

  a {
    text-decoration: none;
    padding: 2px;
    :hover {
      text-decoration: underline;
    }
    transition: background-color 0.25s ease-in, color 0.25s ease-in;
  }
  a.is-active {
    font-weight: bold;
    background-color: ${props =>
      props.theme.preferDark
        ? "rgba(255, 255, 255, 0.25)"
        : "rgba(0, 0, 0, 0.1)"};
  }
  details {
    summary {
      cursor: pointer;
      :hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
      ::marker {
        content: none;
      }
    }
  }
  details > summary::after {
    content: " ➕";
    /* content: "\2719"; */
  }

  details[open] > summary::after {
    content: " ➖";
    /* content: "\268A"; */
  }

  /* details {
    summary {
      cursor: pointer;
      :hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
      ::marker {
        content: none;
      }
      ::after {
        content: "▶";
      }
    }
  }
  details[open="true"] {
    summary {
      ::after {
        content: "▼";
      }
    }
  } */
`

const LinkedToc = ({ tableOfContents }) => {
  React.useEffect(tocHighlightEffect)
  return (
    <Wrapper>
      <details open>
        <summary>
          <span>目录</span>
        </summary>
        <Items items={tableOfContents.items} />
      </details>
    </Wrapper>
  )
}

export default LinkedToc

const Items = ({ url = "", title = "", items = [], level = 0 }) => {
  if (items.length !== 0 && title === "") {
    return (
      <ul>
        {items.map(item => {
          return <Items {...item} key={item.title} level={level + 1} />
        })}
      </ul>
    )
  }
  if (items.length !== 0 && title !== "") {
    return (
      <li>
        <details>
          <summary>
            <a
              data-id={title.replaceAll(".", "")}
              href={`#${encodeURI(
                title.replaceAll(" ", "-").replaceAll(/[.?]/g, "")
              )}`}
            >
              {title}
            </a>
          </summary>
          <ul>
            {items.map(item => {
              return <Items {...item} key={item.title} level={level + 1} />
            })}
          </ul>
        </details>
      </li>
    )
  }
  if (items.length === 0) {
    return (
      <li>
        <a
          data-id={title.replaceAll(".", "")}
          href={`#${encodeURI(
            title.replaceAll(" ", "-").replaceAll(/[.?]/g, "")
          )}`}
        >
          {title}
        </a>
      </li>
    )
  }
  return null
}

function tocHighlightEffect() {
  const Toc = {
    container: document.getElementById("toc"),
    links: null,
    headings: null,
    intersectionOptions: {
      rootMargin: "0px",
      threshold: 1,
    },
    previousSection: null,
    observer: null,

    init() {
      this.handleObserver = this.handleObserver.bind(this)
      this.setUpObserver()
      this.findLinksAndHeadings()
      this.observeSections()
    },
    handleLinkClick() {},
    handleObserver(entries, observer) {
      entries.forEach(entry => {
        let href = `#${entry.target.getAttribute("id")}`
        let link = this.links.find(l => {
          return decodeURI(l.getAttribute("href")) === href
        })
        if (entry.isIntersecting && entry.intersectionRatio >= 1) {
          link.classList.add("is-visible")
          this.previousSection = entry.target.getAttribute("id")
        } else {
          link.classList.remove("is-visible")
        }
        this.highlightFirstActive()
      })
    },
    highlightFirstActive() {
      let firstVisibleLink = this.container.querySelector(".is-visible")
      this.links.forEach(link => {
        link.classList.remove("is-active")
      })
      if (firstVisibleLink) {
        firstVisibleLink.classList.add("is-active")
      }
      if (!firstVisibleLink && this.previousSection) {
        this.container
          .querySelector(`a[href="#${encodeURI(this.previousSection)}"]`)
          .classList.add("is-active")
      }
    },

    setUpObserver() {
      this.observer = new IntersectionObserver(
        this.handleObserver,
        this.intersectionOptions
      )
    },
    findLinksAndHeadings() {
      this.links = [...this.container.querySelectorAll("a")]
      this.headings = this.links.map(link => {
        let id = link.getAttribute("data-id").replaceAll(" ", "-")
        return document.getElementById(id)
      })
    },
    observeSections() {
      this.headings.forEach(heading => {
        heading && this.observer.observe(heading)
      })
    },
  }

  Toc.init()
}
