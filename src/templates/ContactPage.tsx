import React, { FC } from 'react'
import { MapPin, Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import './ContactPage.css'
import LeafletMap from '../components/LeafletMap'
import { ContactPageQuery } from '../graphql'
import FormSimpleAjax from '../components/FormSimpleAjax'

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
        <section className="contact-section">
          <div className="container">
            <div className="d-none d-sm-block mb-5 pb-4">
              {locations && locations.length > 0 &&
                <LeafletMap location={locations[0]} />
              }
              <div id="map" >

              </div>
              <div className="row">
                <div className="col-12">
                  <h2 className="contact-title"></h2>
                </div>
                <div className="col-lg-8">
                  <FormSimpleAjax name="Simple Form Ajax" />
                </div>
                <div className="col-lg-3 offset-lg-1">


                  {address &&
                    <div className="media contact-info">
                      <span className="contact-info__icon"><i className="ti-home"></i></span>
                      <div className="media-body">
                        <h3>{address}</h3>
                      </div>
                    </div>
                  }
                  {phone &&
                    <div className="media contact-info">
                      <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                      <div className="media-body">
                        <a className="Contact--Details--Item" href={`tel:${phone}`} style={{ paddingBottom: 0 }}>
                          <h3>{phone}</h3>
                        </a>
                        <p>Mon to Fri 9am to 6pm</p>
                      </div>
                    </div>
                  }
                  {email &&
                    <div className="media contact-info">
                      <span className="contact-info__icon"><i className="ti-email"></i></span>
                      <div className="media-body">
                        <a className="Contact--Details--Item" href={`mailto:${email}`} style={{ paddingBottom: 0 }}>
                          <h3>{email}</h3>
                        </a>
                        <p>Send us your query anytime!</p>
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
        lat
        lng
      }
    }
  }
}
`
