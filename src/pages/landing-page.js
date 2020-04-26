import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Heading from '../components/heading'
import Text from '../components/text'
import Button from '../components/button'
import Image from '../components/image'
import ScrollIndicator from '../components/scrollIndicator'

import './landing-page.scss'

const IndexPage = ({ data: { markdownRemark: { frontmatter: {
  title,
  heading,
  subheading,
  buttons
}}}}) => (
  <Layout>
    <SEO title={title} />
    <div className="landing-page">
      <div className="landing-page__heading">
        <Heading variant="lg">{heading}</Heading>
        <Text>{subheading}</Text>
      </div>
      <Image src="Nick" className="landing-page__image" />
      <div className="landing-page__buttons">
        {
          buttons.map(({link, openNewTab, text}) => (
            <Button link={link} openNewTab={openNewTab}>{text}</Button>
          ))
        }
      </div>
      <ScrollIndicator text="My Story" className="landing-page__scroll-indicator" />
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "landing-page" } }) {
      frontmatter {
        title
        heading
        subheading
        buttons {
          link
          openNewTab
          text
        }
      }
    }
  }
`