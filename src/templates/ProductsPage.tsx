import React, { FC } from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Product from '../components/Product'
import { ProductsPageQuery } from '../graphql'

interface HomePageProps {
  title: string,
  subtitle: string,
  featuredImage: string,
  body: string,
  products: any[],
  showPrices: boolean
}

// Export Template for use in CMS preview
export const ProductsPageTemplate: FC<HomePageProps> = ({
  title,
  subtitle,
  featuredImage,
  body,
  products = [],
  showPrices
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
            <Content source={body} />
          </div>
          </div>
        </div>
        <div className="row">
          {products.map(product => (
            <div className="col-xl-4 col-md-6" key={product.fields.slug}>
              <Product {...product.frontmatter} showPrice={showPrices} />
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
)

const ProductsPage: FC<{ data: ProductsPageQuery }> = ({ data: { page, products, settingsYaml } }) => {
  return (
    <Layout
      meta={page.frontmatter.meta }
      title={page.frontmatter.title}
    >
      <ProductsPageTemplate
        title={page.frontmatter.title}
        subtitle={page.frontmatter.subtitle}
        featuredImage={page.frontmatter.featuredImage}
        body={page.html}
        products={products.edges.map(product => ({
          ...product.node,
          ...product.node.frontmatter,
          ...product.node.fields
        }))}
        showPrices={settingsYaml.showPrices}
      />
    </Layout>
  )
}
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
        id
        frontmatter {
          title
          subtitle
          description
          price
          featuredImage
          categories {
            category
          }
        }
      }
    }
  }
  settingsYaml {
    showPrices
  }
}
`