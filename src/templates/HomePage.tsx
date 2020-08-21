import React, { FC } from 'react'
import { graphql, Link } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import { HomePageQuery, MarkdownRemarkFrontmatterTestimonials, MarkdownRemarkFrontmatterBrands } from '../graphql'
import { Testimonial } from '../components/Testimonial'
import { Brand } from '../components/Brand'

interface HomePageProps {
  title: string
  subtitle: string
  featuredImage: string
  body: string;
  aboutBody: string;
  aboutLink: string;
  aboutLinkText: string;
  aboutImage: string;
  contentTwoBody: string;
  contentTwoLink: string;
  contentTwoLinkText: string;
  contentTwoImage: string;
  brandText: string
  brands: MarkdownRemarkFrontmatterBrands[];
  testimonialText: string;
  testimonials: MarkdownRemarkFrontmatterTestimonials[];
}

// Export Template for use in CMS preview
export const HomePageTemplate: FC<HomePageProps> = (props) => {
  const { title,
    subtitle,
    featuredImage,
    body,
    aboutBody,
    aboutLink,
    aboutLinkText,
    aboutImage,
    contentTwoBody,
    contentTwoLink,
    contentTwoLinkText,
    contentTwoImage,
    testimonialText,
    testimonials,
    brandText,
    brands
  } = props;

  return <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
      slider
    />

    <section className="section">
      <div className="container section_title">
        <Content source={body} />
      </div>
    </section>

    {aboutBody &&
      <div className="single_about_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5">
              <div className="single_about_text">
                <Content source={aboutBody} />
                {(aboutLink && aboutLinkText) &&
                  <Link to={aboutLink} className="boxed_btn">{aboutLinkText}</Link>
                }
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-6 offset-lg-1">
              {aboutImage &&
                <div className="single_about_thumb thumb_n1">
                  <img src={aboutImage} alt="" />
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    }
    {contentTwoBody &&
      <div className="single_about_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              {contentTwoImage &&
                <div className="single_about_thumb thumb_n1">
                  <img src={contentTwoImage} alt="" />
                </div>
              }
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1">
              <div className="single_about_text">
                <Content source={contentTwoBody} />
                {(contentTwoLink && contentTwoLinkText) &&
                  <Link to={contentTwoLink} className="boxed_btn">{contentTwoLinkText}</Link>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    {testimonialText &&
      <Testimonial testimonialText={testimonialText} testimonials={testimonials} />
    }
    {brandText &&
      <Brand brandText={brandText} brands={brands} />
    }
  </main>
}

// Export Default HomePage for front-end
const HomePage: FC<{ data: HomePageQuery }> = ({ data: { page } }) => {
  return (
    <Layout meta={page.frontmatter.meta}>
      <HomePageTemplate
        title={page.frontmatter.title}
        subtitle={page.frontmatter.subtitle}
        featuredImage={page.frontmatter.featuredImage}
        body={page.html}
        aboutBody={page.frontmatter.aboutBody}
        aboutLink={page.frontmatter.aboutLink}
        aboutLinkText={page.frontmatter.aboutLinkText}
        aboutImage={page.frontmatter.aboutImage}
        contentTwoBody={page.frontmatter.contentTwoBody}
        contentTwoLink={page.frontmatter.contentTwoLink}
        contentTwoLinkText={page.frontmatter.contentTwoLinkText}
        contentTwoImage={page.frontmatter.contentTwoImage}
        testimonialText={page.frontmatter.testimonialText}
        testimonials={page.frontmatter.testimonials}
        brandText={page.frontmatter.brandText}
        brands={page.frontmatter.brands} />
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
        aboutBody
        aboutLink
        aboutLinkText
        aboutImage
        contentTwoBody
        contentTwoLink
        contentTwoLinkText
        contentTwoImage
        testimonialText
        testimonials {
          title
          subtitle
          text
        }
        brandText
        brands {
          title
          logo
        }
      }
    }
  }
`
