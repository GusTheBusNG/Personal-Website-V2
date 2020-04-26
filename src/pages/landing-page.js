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
import Subheading from '../components/subheading'
import Quote from '../components/quote'

const IndexPage = ({ data: { markdownRemark: { frontmatter: {
  title,
  heading,
  subheading,
  photo,
  buttons,
  scrollIndicator,
  storyHeading,
  stories
}}}}) => (
  <Layout>
    <SEO title={title} />
    <div className="landing-page">
      <div className="landing-page__heading">
        <Heading variant="lg">{heading}</Heading>
        <Text>{subheading}</Text>
      </div>
      <Image src={photo} className="landing-page__image" />
      <div className="landing-page__buttons">
        {
          buttons.map(({link, openNewTab, text}) => (
            <Button link={link} openNewTab={openNewTab}>{text}</Button>
          ))
        }
      </div>
      <ScrollIndicator text={scrollIndicator} className="landing-page__scroll-indicator" />
    </div>
    <Heading variant="sm">{storyHeading}</Heading>
    {
      stories.map(({ subheading, content, quote: { content: quoteContent, author} }) => (
        <div>
          <Subheading>{subheading}</Subheading>
          <Text>{content}</Text>
          <Quote author={author}>{quoteContent}</Quote>
        </div>
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
        photo
        buttons {
          link
          openNewTab
          text
        }
        scrollIndicator
        storyHeading
        stories {
          subheading
          content
          quote {
            content
            author
          }
        }
      }
    }
  }
`