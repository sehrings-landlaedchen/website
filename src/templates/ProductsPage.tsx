import React, { FC, useState, ChangeEvent, MouseEvent } from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import Product from '../components/Product'
import { ProductsPageQuery } from '../graphql'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface HomePageProps {
  title: string,
  subtitle: string,
  featuredImage: string,
  body: string,
  products: any[],
  categories: any[],
  showPrices: boolean
}

// Export Template for use in CMS preview
export const ProductsPageTemplate: FC<HomePageProps> = ({
  title,
  subtitle,
  featuredImage,
  body,
  products = [],
  categories = [],
  showPrices
}) => {
  const [filter, setFilter] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const pagedProducts = filteredProducts.slice(indexFirstProduct, indexLastProduct);
  const pages = [...Array(Math.ceil(filteredProducts.length / productsPerPage))];

  const handleFilterChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFilter(evt.target.value);
  }

  const handlePrevPage = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    currentPage > 1 && setCurrentPage(currentPage - 1);
  }

  const handleNextPage = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    currentPage !== pages.length && setCurrentPage(currentPage + 1)
  }

  const handleFilter = (evt: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    evt.preventDefault();
    setFilteredProducts(products.filter(x => x.title.toLowerCase().includes(filter.toLowerCase())));
  }

  const handleCategoryFilter = (evt: MouseEvent<HTMLAnchorElement>, category?: string) => {
    evt.preventDefault();
    setFilter("");
    setFilterCategory(category);
    setFilteredProducts(category ? products.filter(product => product.categories?.find((cat: any) => cat.category.includes(category))) : products);
  }

  return (
    <main className="ProductsPage">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />
      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">

                <div className="row">
                  {pagedProducts.map(product => (
                    <div className="col-xl-4 col-md-6" key={product.fields.slug}>
                      <Product {...product.frontmatter} showPrice={showPrices} className="single_order--flat" />
                    </div>
                  ))}
                </div>
                {
                  pages.length > 1 &&
                  <nav className="blog-pagination justify-content-center d-flex">
                    <ul className="pagination">
                      <li className="page-item">
                        <a href="" className="page-link" aria-label="Previous" onClick={handlePrevPage}>
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </a>
                      </li>
                      {
                        [...Array(Math.ceil(products.length / productsPerPage))].map((x, i) =>
                          <li className={`page-item ${currentPage === i + 1 && "active"} `} key={i}>
                            <button className="page-link" onClick={evt => { evt.preventDefault(); setCurrentPage(i + 1) }}>{i + 1}</button>
                          </li>
                        )
                      }
                      <li className="page-item">
                        <a href="" className="page-link" aria-label="Next" onClick={handleNextPage}>
                          <FontAwesomeIcon icon={faChevronRight} />
                        </a>
                      </li>
                    </ul>
                  </nav>
                }
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                  <form action="#">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Keyword"
                          onChange={handleFilterChange}
                          value={filter} />
                      </div>
                    </div>
                    <button className="btn-primary text-white w-100 btn_1 boxed-btn" type="submit" onClick={handleFilter}>Suchen</button>
                  </form>
                </aside>
                <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title">Kategorien</h4>
                  <ul className="list cat-list">
                    <li>
                      <a href="#" className="d-flex" onClick={handleCategoryFilter}>
                        <p>Alle Produkte</p>
                        <p>({products.length})</p>
                      </a>
                    </li>
                    {
                      categories && categories.map((category, i) =>
                        <li key={i}>
                          <a href="#" className="d-flex" onClick={(evt) => handleCategoryFilter(evt, category.title)}>
                    <p>{category.title}{category.title === filterCategory && "active"}</p>
                            <p>({products.filter(product => product.categories?.find((cat: any) => cat.category === category.title)).length})</p>
                          </a>
                        </li>
                      )
                    }
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const ProductsPage: FC<{ data: ProductsPageQuery }> = ({ data: { page, products, categories, settingsYaml } }) => {
  return (
    <Layout
      meta={page.frontmatter.meta}
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
        categories={categories.edges.map(categorie => ({
          ...categorie.node.frontmatter
        }))}
        showPrices={settingsYaml.showPrices}
      />
    </Layout>
  )
}
export default ProductsPage

export const pageQuery = graphql`
query productsPage($id: String!) {
    page: markdownRemark(id: {eq: $id }) {
    ...Meta
    html
    frontmatter {
      title
      subtitle
      featuredImage
    }
  }
  products: allMarkdownRemark (
    filter: {fields: {contentType: {eq: "products" } } }
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
  categories: allMarkdownRemark (
    filter: {
      fields: {
        contentType: {
          eq: "productCategories"
        }
      }
    }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
        }
      }
    }
  }
  settingsYaml {
    showPrices
  }
}
`