const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    // add URL slug to all .mdx file
    const slug = createFilePath({ node, getNode })
    createNodeField({ node, name: "slug", value: slug })

    const splittedSlug = slug.split("/")
    console.log("[>>] splitted slug : ", splittedSlug)

    if (splittedSlug.length === 4 && splittedSlug.includes("blog")) {
      createNodeField({ node, name: "type", value: "BLOG_POST" })
    } else if (splittedSlug.length === 4 && splittedSlug.includes("book")) {
      createNodeField({ node, name: "type", value: "BOOK_COVER" })
    } else if (splittedSlug.length === 5 && splittedSlug.includes("book")) {
      createNodeField({ node, name: "type", value: "BOOK_CHAPTER" })
      createNodeField({ node, name: "chapterOf", value: splittedSlug[2] })
    } else {
      createNodeField({ node, name: "type", value: "NaT" })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  let result = null
  result = await graphql(`
    query {
      allMdx(filter: { fields: { type: { eq: "BLOG_POST" } } }) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)
  const posts = result.data.allMdx.nodes
  posts.forEach(post => {
    createPage({
      path: post.fields.slug,
      component: path.resolve(`./src/templates/blog-post.jsx`),
      context: {
        id: post.id,
      },
    })
  })

  result = await graphql(`
    query allBookCover {
      allMdx(filter: { fields: { type: { eq: "BOOK_COVER" } } }) {
        nodes {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  const covers = result.data.allMdx.nodes
  covers.forEach(cover => {
    createPage({
      path: cover.fields.slug,
      component: path.resolve(`./src/templates/book-cover.jsx`),
      context: {
        id: cover.id,
        title: cover.frontmatter.title,
      },
    })
  })

  result = await graphql(`
    query allBookChapter {
      allMdx(filter: { fields: { type: { eq: "BOOK_CHAPTER" } } }) {
        nodes {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  const chapters = result.data.allMdx.nodes
  chapters.forEach(chapter => {
    createPage({
      path: chapter.fields.slug,
      component: path.resolve(`./src/templates/book-chapter.jsx`),
      context: {
        id: chapter.id,
      },
    })
  })
}
