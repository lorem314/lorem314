import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import TemplateBookCover from "../components/TemplateBookCover"

export default function BookCover({ data = {}, location = {} }) {
  const latestBlogPosts = data?.latestBlogPosts?.nodes
  const latestBookChapters = data?.latestBookChapters?.nodes

  const bookCover = data?.bookCover
  const bookChapters = data?.bookChapters?.nodes

  return (
    <Layout
      location={location}
      latestBlogPosts={latestBlogPosts}
      latestBookChapters={latestBookChapters}
    >
      <TemplateBookCover bookCover={bookCover} bookChapters={bookChapters} />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String, $title: String) {
    bookCover: mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        created
        tags
        coverImage {
          childImageSharp {
            gatsbyImageData(width: 320, placeholder: BLURRED)
          }
        }
      }
      body
      tableOfContents
    }

    bookChapters: allMdx(
      filter: { fields: { chapterOf: { eq: $title } } }
      sort: { order: ASC, fields: frontmatter___chapterNo }
    ) {
      nodes {
        id
        frontmatter {
          title
          chapterNo
        }
        tableOfContents
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
