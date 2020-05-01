import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
// import SVGIcon from '../components/SVGIcon'
import Product from '../components/Product'

// Export Template for use in CMS preview
export const ProductsPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body,
  products = []
}) => (
  <main className="ProductsPage">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section order_area">
      <div className="container">
        <div className="row">
        <div className="col-xl-12">
          <div className="section_title mb-70">
            {/* <h3>{section1}</h3> */}
            <Content source={body} />
            {/* <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards <br> especially in the workplace. That’s why it’s crucial that, as women.</p> */}
          </div>
          </div>
        </div>
        <div className="row">
          {products.map(product => (
            <div className="col-xl-4 col-md-6" key={product.fields.slug}>
              <Product {...product.frontmatter} />
            </div>
          ))}

        </div>
      </div>
    </section>
  </main>
)

const ProductsPage = ({ data: { page, products } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ProductsPageTemplate
      {...page.frontmatter}
      body={page.html}
      products={products.edges.map(product => ({
        ...product.node,
        ...product.frontmatter,
        ...product.fields
      }))}
    />
  </Layout>
)
export default ProductsPage

export const pageQuery = graphql`
  query productsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
    products: allMarkdownRemark (
      filter: { fields: { contentType: { eq: "products" } } }
    ) {
      edges {
        node {
          fields {
            slug
            contentType
          }
          frontmatter {
            title
            subtitle
            description
            price
            featuredImage
          }
        }
      }
    }
  }
`
