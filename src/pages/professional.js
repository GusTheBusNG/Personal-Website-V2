import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Heading from '../components/heading'
import BigCard from '../components/cards/bigCard'

import './landing-page.scss'

const ProfessionalPage = ({ data: { markdownRemark: { frontmatter: {
    title,
    heading,
    experiences,
  }},
  paw: { childCloudinaryAsset: { fluid: paw }},
}}) => (
  <Layout>
    <SEO title={title} />
    <Heading>{heading}</Heading>
    {
      experiences.map(experience => <BigCard {...experience} paw={paw} />)
    }
  </Layout>
)

export default ProfessionalPage

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "professional" } }) {
      frontmatter {
        title
        heading
        experiences {
          title
          company
          timespan
          picture {
            name
            link
          }
          location
          button {
            openNewTab
            link
            text
          }
          bullets
          technologies
        }
      }
    }
    paw: file(name: {eq: "paw"}) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`