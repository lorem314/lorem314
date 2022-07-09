import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import TemplateBlogPost from "../components/TemplateBlogPost"

export default function BlogPost({ data = {}, location = {} }) {
  const latestBlogPosts = data?.latestBlogPosts?.nodes
  const latestBookChapters = data?.latestBookChapters?.nodes

  const post = data?.blogPost

  return (
    <Layout
      location={location}
      latestBlogPosts={latestBlogPosts}
      latestBookChapters={latestBookChapters}
    >
      <TemplateBlogPost post={post} />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    blogPost: mdx(id: { eq: $id }) {
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
        unsplashUrl
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
