import React, { FC } from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import { DefaultPageQuery } from '../graphql'

interface DefaultPageProps {
    title: string;
    subtitle: string
    featuredImage: string;
    body: string;
}

// Export Template for use in CMS preview
export const DefaultPageTemplate: FC<DefaultPageProps> = ({title, subtitle, featuredImage, body}) => (
  <main className="DefaultPage">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
  </main>
)

const DefaultPage: FC<{ data: DefaultPageQuery }> = ({ data: { page } }) => {
  return (
  <Layout
    meta={page.frontmatter.meta }
    title={page.frontmatter.title}
  >
    <DefaultPageTemplate
      title={page.frontmatter.title}
      subtitle={page.frontmatter.subtitle}
      featuredImage={page.frontmatter.featuredImage}
      body={page.html} />
  </Layout>
  )
}
export default DefaultPage

export const pageQuery =
  graphql`
    query DefaultPage($id: String) {
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
