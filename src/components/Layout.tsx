import React, { Fragment, FC } from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import Meta from './Meta'
import Nav from './Nav'
import Footer from './Footer'

import 'modern-normalize/modern-normalize.css'
import './globalStyles.css'
import '../scss/style.scss'
import { IndexLayoutQueryQuery, MarkdownRemarkFrontmatterMeta } from '../graphql'

interface LayoutProps {
  children: any;
  meta: MarkdownRemarkFrontmatterMeta;
  title: string;
}

const Layout: FC<LayoutProps> = ({ children, meta, title = "" }) => {
  const data: IndexLayoutQueryQuery = useStaticQuery(
    graphql`
      query IndexLayoutQuery {
        settingsYaml {
          siteTitle
          siteDescription
          googleTrackingId
          socialMediaCard {
            image
          }
        }
      }
    `)

  const { siteTitle, socialMediaCard, googleTrackingId } =
    data.settingsYaml || {}

  return (
    <>
      <Helmet
        defaultTitle={siteTitle}
        titleTemplate={siteTitle}
      >
        {title}
        <link href="https://ucarecdn.com" rel="preconnect" />
        <link rel="dns-prefetch" href="https://ucarecdn.com" />
        {/* Add font link tags here */}
      </Helmet>

      <Meta
        {...meta}
        absoluteImageUrl={
          socialMediaCard &&
          socialMediaCard.image &&
          socialMediaCard.image
        }
        siteTitle={data.settingsYaml.siteTitle}
        siteDescription={data.settingsYaml.siteDescription}
        googleTrackingId={googleTrackingId}
      />

      <Nav />

      <Fragment>{children}</Fragment>

      <Footer />
    </>
  )
}

export default Layout
