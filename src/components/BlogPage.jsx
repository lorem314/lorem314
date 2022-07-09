import React, { useState } from "react"
import styled from "styled-components"

// import HeadTitle from "./ui/HeadTitle"
import SearchBar from "./blog/SearchBar"
import TagsFilter from "./blog/TagsFilter"
import BlogPostCard from "./blog/BlogPostCard"

const Wrapper = styled.div`
  margin: 2rem auto 0;
  max-width: 42rem;
  padding: 0.5rem 1.5rem 2rem;

  background-color: var(--content-bg);
  transition: background-color 0.25s ease-in;

  .all-blog-posts {
    display: flex;
    flex-direction: column;

    max-width: 36rem;
    margin: 1rem auto 0;
  }
`

const BlogPage = ({ allBlogPosts }) => {
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState("")

  const handleChange = event => {
    setSearch(event.target.value)
  }
  const handleClose = () => {
    setSearch("")
  }

  const tagCount = countTagsFromPosts(allBlogPosts)

  let resultPosts = allBlogPosts
  resultPosts = resultPosts.filter(post => {
    if (selected === "") return true
    return post.frontmatter.tags.indexOf(selected) !== -1
  })
  resultPosts = resultPosts.filter(post => {
    if (search === "") return true
    return post.frontmatter.title.includes(search)
  })

  return (
    <>
      {/* <HeadTitle subTitle="博客" /> */}
      <Wrapper>
        <h2>
          博客 ({resultPosts.length} / {allBlogPosts.length})
        </h2>

        <SearchBar
          search={search}
          handleChange={handleChange}
          handleClose={handleClose}
        />

        <TagsFilter
          tagCount={tagCount}
          selected={selected}
          setSelected={setSelected}
        />

        <div className="all-blog-posts">
          {resultPosts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </Wrapper>
    </>
  )
}

export default BlogPage

function countTagsFromPosts(posts) {
  return posts.reduce((tagsObj, post) => {
    const tags = post.frontmatter.tags

    tags.forEach(tag => {
      if (!tagsObj[tag]) {
        tagsObj[tag] = 1
      } else {
        tagsObj[tag] += 1
      }
    })

    return tagsObj
  }, {})
}
