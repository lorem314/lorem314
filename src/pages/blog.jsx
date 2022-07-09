import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import BlogPage from "../components/BlogPage"

export default function Blog({ data = {}, location = {} }) {
  const latestBlogPosts = data?.latestBlogPosts?.nodes
  const latestBookChapters = data?.latestBookChapters?.nodes

  const allBlogPosts = data.allBlogPosts.nodes

  return (
    <Layout
      location={location}
      latestBlogPosts={latestBlogPosts}
      latestBookChapters={latestBookChapters}
    >
      <BlogPage allBlogPosts={allBlogPosts} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allBlogPosts: allMdx(filter: { fields: { type: { eq: "BLOG_POST" } } }) {
      nodes {
        id
        frontmatter {
          title
          created
          tags
        }
        fields {
          slug
        }
        tableOfContents
      }
    }

    latestBlogPosts: allMdx(
      filter: { fields: { type: { eq: "BLOG_POST" } } }
      sort: { fields: frontmatter___created, order: DESC }
      limit: 4
    ) {
      nodes {
        id
        frontmatter {
          title
          created
          tags
        }
        fields {
          slug
        }
      }
    }

    latestBookChapters: allMdx(
      filter: { fields: { type: { eq: "BOOK_CHAPTER" } } }
      sort: { fields: frontmatter___created, order: DESC }
      limit: 4
    ) {
      nodes {
        id
        frontmatter {
          title
          created
          tags
          chapterNo
          chapterOf
        }
        fields {
          slug
        }
      }
    }
  }
`
