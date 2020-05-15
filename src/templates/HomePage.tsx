import React, { FC } from 'react'
import { graphql, Link } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import { HomePageQuery } from '../graphql'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTractor, faShoppingCart, faDesktop, faCandyCane, faHouseUser } from '@fortawesome/free-solid-svg-icons'

interface HomePageProps {
  title: string
  subtitle: string
  featuredImage: string
  body: string
}

// Export Template for use in CMS preview
export const HomePageTemplate: FC<HomePageProps> = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
      slider
    />
    <div className="single_about_area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-5">
            <div className="single_about_text">
              <Content source={body} />
              <Link to="/products/" className="boxed_btn">Produkte</Link>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-6 offset-lg-1">
            <div className="single_about_thumb thumb_n1">
              <img src="img/555x764.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="service_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title mb-60">
              <h3>Our Services</h3>
              <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards <br /> especially in the workplace. That’s why it’s crucial that, as women.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="single_service">
              <div className="service_icon">
                <FontAwesomeIcon icon={faCandyCane} style={{fontSize: "50px"}} />
              </div>
              <h4>Birthday Catering</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single_service">
              <div className="service_icon">
                <FontAwesomeIcon icon={faHouseUser} style={{fontSize: "50px"}} />
              </div>
              <h4>Wedding Service</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single_service">
              <div className="service_icon">
                <FontAwesomeIcon icon={faShoppingCart} style={{fontSize: "50px"}} />
              </div>
              <h4>Party Catering</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single_service">
              <div className="service_icon">
                <FontAwesomeIcon icon={faTractor} style={{fontSize: "50px"}} />
              </div>
              <h4>Event Catering</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single_service">
              <div className="service_icon">
                <FontAwesomeIcon icon={faShoppingCart} style={{fontSize: "50px"}} />
              </div>
              <h4>Corporate Service</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single_service">
              <div className="service_icon">
                <FontAwesomeIcon icon={faDesktop} style={{fontSize: "50px"}} />
              </div>
              <h4>Catering On Demand</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="testmonial_area banner-3">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title white mb-60">
              <h3>Feedback from Customers</h3>
              <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards <br /> especially in the workplace. That’s why it’s crucial that, as women.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="testmonial_active owl-carousel owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div className="owl-stage row">
                  <div className="owl-item cloned col-md-6">
                    <div className="single_testmonial d-flex">
                      <div className="testmonial_thumb">
                        <img src="img/testmonial/2.png" alt="" />
                      </div>
                      <div className="testmonial_author">
                        <h3>Adam Nahan</h3>
                        <span>Chief Customer</span>
                        <p>You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one
yielding creepeth third give may never lie alternet food.</p>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned col-md-6">
                    <div className="single_testmonial d-flex">
                      <div className="testmonial_thumb">
                        <img src="img/testmonial/1.png" alt="" />
                      </div>
                      <div className="testmonial_author">
                        <h3>Adame Nesane</h3>
                        <span>Chief Customer</span>
                        <p>You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one
yielding creepeth third give may never lie alternet food.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="brand_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title mb-70">
              <h3>Unsere Produkte findet ihr auch hier</h3>
              <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct
                standards <br /> especially in the workplace. That’s why it’s crucial that, as women.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="single_brand">
              <img src="img/100.png" alt="" />
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="single_brand">
              <img src="img/100.png" alt="" />
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="single_brand">
              <img src="img/100.png" alt="" />
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="single_brand">
              <img src="img/100.png" alt="" />
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="single_brand">
              <img src="img/100.png" alt="" />
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="single_brand">
              <img src="img/100.png" alt="" />
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="single_brand">
              <img src="img/100.png" alt="" />
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="single_brand">
              <img src="img/100.png" alt="" />
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="single_brand">
              <img src="img/100.png" alt="" />
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="single_brand">
              <img src="img/100.png" alt="" />
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="single_brand">
              <img src="img/100.png" alt="" />
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="single_brand">
              <img src="img/100.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
)

// Export Default HomePage for front-end
const HomePage: FC<{ data: HomePageQuery }> = ({ data: { page } }) => {
  return (
    <Layout meta={page.frontmatter.meta}>
      <HomePageTemplate
        title={page.frontmatter.title}
        subtitle={page.frontmatter.subtitle}
        featuredImage={page.frontmatter.featuredImage}
        body={page.html} />
    </Layout>
  )
}
export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
