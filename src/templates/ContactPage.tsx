import React, { FC } from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import './ContactPage.css'
import LeafletMap from '../components/LeafletMap'
import { ContactPageQuery, MarkdownRemarkFrontmatterLocations } from '../graphql'
import FormSimpleAjax from '../components/FormSimpleAjax'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faIdCard, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Content from '../components/Content'

interface ContactPageProps {
  body: string,
  title?: string,
  subtitle: string,
  featuredImage: string,
  address: string,
  phone: string,
  email: string,
  locations: MarkdownRemarkFrontmatterLocations[]
}

// Export Template for use in CMS preview
export const ContactPageTemplate: FC<ContactPageProps> = ({
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
    <section className="contact-section">
      <div className="container">
        <div className="d-sm-block mb-5 pb-4">
          {locations && locations.length > 0 &&
            <LeafletMap locations={locations} />
          }
          <div id="map" >

          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title"></h2>
            </div>
            <div className="col-lg-4">
              {address &&
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <FontAwesomeIcon icon={faMap} style={{ fontSize: '27px' }} />
                  </span>
                  <div className="media-body">
                    <Content source={address} />
                  </div>
                </div>
              }
            </div>

            <div className="col-lg-4 offset-lg-4">
              {phone &&
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <FontAwesomeIcon icon={faIdCard} style={{ fontSize: '27px' }} />
                  </span>
                  <div className="media-body">
                    <a className="Contact--Details--Item" href={`tel:${phone}`} style={{ padding: 0 }}>
                      <h3>{phone}</h3>
                    </a>
                  </div>
                </div>
              }
              {email &&
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '27px' }} />
                  </span>
                  <div className="media-body">
                    <h3>{email}</h3>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
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
        subtitle={page.frontmatter.subtitle}
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
  page: markdownRemark(id: {eq: $id }) {
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
        title
        lat
        lng
      }
    }
  }
}
`
