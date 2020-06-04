import React, { FC, useState, ChangeEvent, MouseEvent } from 'react'
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
}) => {
  const [filter, setFilter] = useState("");
  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);


  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const pagedProducts = products.slice(indexFirstProduct, indexLastProduct);
  const pages = [...Array(Math.ceil(products.length / productsPerPage))];

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
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

  return (
    <main className="ProductsPage">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      {/*<section className="section order_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title mb-70">
                <Content source={body} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title mb-70">
                <input className="single-input" value={filter} onChange={handleChange} />
              </div>
            </div>
          </div>
          <div className="row">
            {pagedProducts.filter(x => x.title.toLowerCase().includes(filter.toLowerCase())).map(product => (
              <div className="col-xl-4 col-md-6" key={product.fields.slug}>
                <Product {...product.frontmatter} showPrice={showPrices} />
              </div>
            ))}
          </div>
        </div>
      </section>*/}
      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">

                <div className="row">
                  {pagedProducts.filter(x => x.title.toLowerCase().includes(filter.toLowerCase())).map(product => (
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
                          <i className="ti-angle-left"></i>
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
                          <i className="ti-angle-right"></i>
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
                        <input type="text" className="form-control" placeholder="Search Keyword" onfocus="if (!window.__cfRLUnblockHandlers) return false; this.placeholder = ''" onblur="if (!window.__cfRLUnblockHandlers) return false; this.placeholder = 'Search Keyword'" />
                        <div className="input-group-append">
                          <button className="btn" type="button"><i className="ti-search"></i></button>
                        </div>
                      </div>
                    </div>
                    <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Suchen</button>
                  </form>
                </aside>
                <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title">Kategorien</h4>
                  <ul className="list cat-list">
                    <li>
                      <a href="#" className="d-flex">
                        <p>Resaurant food</p>
                        <p>(37)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Travel news</p>
                        <p>(10)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Modern technology</p>
                        <p>(03)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Product</p>
                        <p>(11)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Inspiration</p>
                        <p>21</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Health Care (21)</p>
                        <p>09</p>
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title">Recent Post</h3>
                  <div className="media post_item">
                    <img src="img/post/post_1.png" alt="post" />
                    <div className="media-body">
                      <a href="single-blog.html">
                        <h3>From life was you fish...</h3>
                      </a>
                      <p>January 12, 2019</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="img/post/post_2.png" alt="post" />
                    <div className="media-body">
                      <a href="single-blog.html">
                        <h3>The Amazing Hubble</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="img/post/post_3.png" alt="post" />
                    <div className="media-body">
                      <a href="single-blog.html">
                        <h3>Astronomy Or Astrology</h3>
                      </a>
                      <p>03 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="img/post/post_4.png" alt="post" />
                    <div className="media-body">
                      <a href="single-blog.html">
                        <h3>Asteroids telescope</h3>
                      </a>
                      <p>01 Hours ago</p>
                    </div>
                  </div>
                </aside>
                <aside className="single_sidebar_widget tag_cloud_widget">
                  <h4 className="widget_title">Tag Clouds</h4>
                  <ul className="list">
                    <li>
                      <a href="#">project</a>
                    </li>
                    <li>
                      <a href="#">love</a>
                    </li>
                    <li>
                      <a href="#">technology</a>
                    </li>
                    <li>
                      <a href="#">travel</a>
                    </li>
                    <li>
                      <a href="#">restaurant</a>
                    </li>
                    <li>
                      <a href="#">life style</a>
                    </li>
                    <li>
                      <a href="#">design</a>
                    </li>
                    <li>
                      <a href="#">illustration</a>
                    </li>
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

const ProductsPage: FC<{ data: ProductsPageQuery }> = ({ data: { page, products, settingsYaml } }) => {
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
  settingsYaml {
    showPrices
  }
}
`