import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Heading from '../components/heading'
import Text from '../components/text'
import Button from '../components/button'

const IndexPage = ({ data: { markdownRemark: { frontmatter: {
  title,
  heading,
  subheading,
  buttons
}}}}) => (
  <Layout>
    <SEO title={title} />
    <Heading variant="lg">{heading}</Heading>
    <Text>{subheading}</Text>
    {
      buttons.map(({link, openNewTab, text}) => (
        <Button link={link} openNewTab={openNewTab}>{text}</Button>
      ))
    }
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