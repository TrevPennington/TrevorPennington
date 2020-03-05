// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   const blogPost = path.resolve(`./src/templates/blog-post.js`)
//   return graphql(
//     `
//       {
//         allMdx(
//           sort: { fields: [frontmatter___date], order: DESC }
//           limit: 1000
//         ) {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//               frontmatter {
//                 title
//               }
//             }
//           }
//         }
//       }
//     `
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     // Create blog posts pages.
//     const posts = result.data.allMdx.edges

//     posts.forEach((post, index) => {
//       const previous = index === posts.length - 1 ? null : posts[index + 1].node
//       const next = index === 0 ? null : posts[index - 1].node

//       createPage({
//         path: `blog${post.node.fields.slug}`,
//         component: blogPost,
//         context: {
//           slug: post.node.fields.slug,
//           previous,
//           next,
//         },
//       })
//     })

//     return null
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `Mdx`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }



//FOR MARKDOWNS//


// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions
//   const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
//   const result = await graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `)
//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }
//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.frontmatter.path,
//       component: blogPostTemplate,
//       context: {}, // additional data can be passed via context
//     })
//   })
// }