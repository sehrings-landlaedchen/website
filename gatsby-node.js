const _ = require("lodash")
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          limit: 1000
        ) {
          edges {
            node {
              id 
              frontmatter {
                template
                title
              }
              fields {
                slug
                contentType
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const mdFiles = result.data.allMarkdownRemark.edges;

  const contentTypes = _.groupBy(mdFiles, 'node.fields.contentType');

  // const contentTypes = mdFiles.reduce((obj, contentType) => {
  //   var type = contentType.node.fields.contentType;

  //   if (!obj.hasOwnProperty(type)) {
  //     obj[type] = [];
  //   }

  //   obj[type].push(contentType);
  //   return obj;
  // }, {})

  _.each(contentTypes, (pages, contentType) => {
    const pagesToCreate = pages.filter(page => 
      _.get(page, 'node.frontmatter.template')
      )
      if (!pagesToCreate.length) return console.log(`Skipping ${contentType}`)
      
      pagesToCreate.forEach((page, index) => {
        const id = page.node.id
        createPage({
          path: page.node.fields.slug,
          component: path.resolve(`src/templates/${String(page.node.frontmatter.template)}.tsx`),
          context: {
            id
          }
        })
      })
  })
  // contentTypes.forEach((contentType, index) => {
  //   console.log(contentType);
    
  // })

  // // Create blog posts pages.
  // const posts = result.data.allMarkdownRemark.edges

  // posts.forEach((post, index) => {
  //   const previous = index === posts.length - 1 ? null : posts[index + 1].node
  //   const next = index === 0 ? null : posts[index - 1].node

  //   createPage({
  //     path: post.node.fields.slug,
  //     component: blogPost,
  //     context: {
  //       slug: post.node.fields.slug,
  //       previous,
  //       next,
  //     },
  //   })
  // })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // convert frontmatter images
  // fmImagesToRelative(node)

  // Create smart slugs
  // https://github.com/Vagr9K/gatsby-advanced-starter/blob/master/gatsby-node.js
  let slug
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)

    if (_.get(node, 'frontmatter.slug')) {
      slug = `/${node.frontmatter.slug.toLowerCase()}/`
    } else if (
      // home page gets root slug
      parsedFilePath.name === 'home' &&
      parsedFilePath.dir === 'pages'
    ) {
      slug = `/`
    } else if (_.get(node, 'frontmatter.title')) {
      slug = `/${_.kebabCase(parsedFilePath.dir)}/${_.kebabCase(
        node.frontmatter.title
      )}/`
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`
    } else {
      slug = `/${parsedFilePath.dir}/`
    }

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })

    // Add contentType to node.fields
    createNodeField({
      node,
      name: 'contentType',
      value: parsedFilePath.dir
    })
  }
}

module.exports.resolvableExtensions = () => ['.json']
