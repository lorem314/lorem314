import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import BookPage from "../components/BookPage"

export default function Book({ data = {}, location = {} }) {
  const latestBlogPosts = data?.latestBlogPosts?.nodes
  const latestBookChapters = data?.latestBookChapters?.nodes

  const allBookCovers = data.allBookCovers.nodes

  return (
    <Layout
      location={location}
      latestBlogPosts={latestBlogPosts}
      latestBookChapters={latestBookChapters}
    >
      <BookPage allBookCovers={allBookCovers} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allBookCovers: allMdx(filter: { fields: { type: { eq: "BOOK_COVER" } } }) {
      nodes {
        id
        frontmatter {
          title
          created
          tags
          coverImage {
            childImageSharp {
              gatsbyImageData(width: 1080, placeholder: BLURRED)
            }
          }
        }
        body
        fields {
          slug
        }
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
