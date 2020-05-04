import React, { FC } from 'react'
import { MapPin, Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import FormSimpleAjax from '../components/FormSimpleAjax'
import Content from '../components/Content'
import Layout from '../components/Layout'
import './ContactPage.css'
import LeafletMap from '../components/LeafletMap'
import { ContactPageQuery } from '../graphql'

// Export Template for use in CMS preview
export const ContactPageTemplate: FC<{
  body: string,
  title?: string,
  subtitle: string,
  featuredImage: string,
  address: string,
  phone: string,
  email: string,
  locations: any[]
}> = ({
  body,
  title,
  subtitle,
  featuredImage,
  address,
  phone,
  email,
  locations
}) => (
  <main className="Contact">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <div>
          <Content source={body} />
          <div className="Contact--Details">
            {address && (
              <a
                className="Contact--Details--Item"
                href={`https://www.google.de/maps/search/${encodeURI(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin /> {address}
              </a>
            )}
            {phone && (
              <a className="Contact--Details--Item" href={`tel:${phone}`}>
                <Smartphone /> {phone}
              </a>
            )}
            {email && (
              <a className="Contact--Details--Item" href={`mailto:${email}`}>
                <Mail /> {email}
              </a>
            )}
          </div>
        </div>

        <div>
          <FormSimpleAjax name="Simple Form Ajax" />
        </div>
      </div>
    </section>
    {locations && locations.length > 0 &&
      <LeafletMap location={locations[0]} />
    }
  </main>
)

const ContactPage: FC<{ data: ContactPageQuery }> = ({ data: { page } }) => {
  return (
    <Layout
      meta={page.frontmatter.meta}
      title={page.frontmatter.title || ""}
    >
      <ContactPageTemplate
        title={page.frontmatter.title}
        subtitle={page.frontmatter.title}
        featuredImage={page.frontmatter.featuredImage}
        address={page.frontmatter.address}
        phone={page.frontmatter.phone}
        email={page.frontmatter.email}
        locations={page.frontmatter.locations}
        body={page.html} />
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
query ContactPage($id: String!) {
  page: markdownRemark(id: { eq: $id }) {
    ...Meta
    html
    frontmatter {
      title
      template
      subtitle
      featuredImage
      address
      phone
      email
      locations {
        mapLink
        lat
        lng
      }
    }
  }
}
`
