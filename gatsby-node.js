const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      categories: allContentfulGalleries {
        distinct(field: category)
      }

      images: allContentfulGalleries {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.categories.distinct.forEach(category => {
    createPage({
      path: `/${category}`,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        category,
      },
    })
  })
  result.data.images.nodes.forEach(image => {
    createPage({
      path: `/${image.slug}`,
      component: path.resolve(`src/templates/photo-template.js`),
      context: {
        slug: image.slug,
      },
    })
  })
}
