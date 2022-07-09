import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import TemplateBookChapter from "../components/TemplateBookChapter"

export default function BookChapter({ data = {}, location = {} }) {
  const latestBlogPosts = data?.latestBlogPosts?.nodes
  const latestBookChapters = data?.latestBookChapters?.nodes

  const bookChapter = data.bookChapter

  return (
    <Layout
      location={location}
      latestBlogPosts={latestBlogPosts}
      latestBookChapters={latestBookChapters}
    >
      <TemplateBookChapter bookChapter={bookChapter} />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    bookChapter: mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        created
        tags
        chapterNo
      }
      body
      tableOfContents
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
