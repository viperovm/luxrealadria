import React, { Fragment, useEffect, useState } from 'react'
import MetaTags from 'react-meta-tags'
import Header from '../layouts/Header'
import Breadcrumb from '../layouts/Breadcrumb'
import Footer from '../layouts/Footerthree'
import Content from '../sections/siteAdmin/Content'

const SiteAdmin = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Acres - Real Estate React Template | Submit Listing</title>
        <meta name='description' content='#' />
      </MetaTags>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: 'Управление сайтом' }} />
      <Content />
      <Footer />
    </Fragment>
  )
}

export default SiteAdmin
