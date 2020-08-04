import React, { FC } from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Gallery from '../components/Gallery'
import Popup from '../components/Popup'
import { MarkdownRemarkFrontmatterAccordion, MarkdownRemarkFrontmatterGallery, InfoPageQuery } from '../graphql'

interface ComponentsPageProps {
  title: string,
  subtitle: string,
  featuredImage: string,
  section1: string,
  section2: string,
  video: string,
  videoPoster: string,
  videoTitle: string,
  accordion: MarkdownRemarkFrontmatterAccordion[],
  body: string,
  gallery: MarkdownRemarkFrontmatterGallery[]
}

// Export Template for use in CMS preview
export const InfoPageTemplate: FC<ComponentsPageProps> = ({
  title,
  subtitle,
  featuredImage,
  section1,
  section2,
  video,
  videoPoster,
  videoTitle,
  accordion,
  body,
  gallery
}) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container">
        <Content source={section1} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2>Our gallery component</h2>
        <Gallery images={gallery} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Content source={section2} />
      </div>
    </section>

    <section className="BackgroundVideo-section section">
      <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
        {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo>
    </section>

    <section className="section">
      <div className="container">
        <Accordion items={accordion} />
      </div>
    </section>
  </main>
)

const InfoPage: FC<{ data: InfoPageQuery}> = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta}
    title={page.frontmatter.title}
  >
    <InfoPageTemplate
      title={page.frontmatter.title}
      subtitle={page.frontmatter.subtitle}
      featuredImage={page.frontmatter.featuredImage}
      section1={page.frontmatter.section1}
      section2={page.frontmatter.section2}
      video={page.frontmatter.video}
      videoPoster={page.frontmatter.videoPoster}
      videoTitle={page.frontmatter.videoTitle}
      accordion={page.frontmatter.accordion}
      gallery={page.frontmatter.gallery}
      body={page.html} />
  </Layout>
)

export default InfoPage

export const pageQuery = graphql`
    query InfoPage($id: String!) {
      page: markdownRemark(id: { eq: $id }) {
        ...Meta
        ...Gallery
        html
        frontmatter {
          title
          template
          subtitle
          featuredImage
          section1
          section2
          video
          videoPoster
          videoTitle
          accordion {
            title
            description
          }
        }
      }
    }
  `
