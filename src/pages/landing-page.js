import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Heading from '../components/heading'
import Text from '../components/text'
import Button from '../components/button'
import Image from '../components/image'
import ScrollIndicator from '../components/scrollIndicator'
import Subheading from '../components/subheading'
import Quote from '../components/quote'
import Section from '../components/section'
import Spacer from '../components/spacer'

import './landing-page.scss'
import SocialMediaLine from '../components/social-media-line'

const IndexPage = ({ data: { markdownRemark: { frontmatter: {
    title,
    heading,
    subheading,
    buttons,
    scrollIndicator,
    storyHeading,
    stories
  }},
  Nick: { childCloudinaryAsset: { fluid: Nick }},
  NickMountain: { childCloudinaryAsset: { fluid: NickMountain }},
  hang: { childCloudinaryAsset: { fluid: hang }},
  grass: { childCloudinaryAsset: { fluid: grass }},
  hangingout: { childCloudinaryAsset: { fluid: hangingout }},
}}) => {
  const photos = { Nick, NickMountain, hang, grass, hangingout }

  return (
    <Layout>
      <SEO title={title} />
      <Section>
        <div className="landing-page">
          <div className="landing-page__heading">
            <Heading variant="lg">{heading}</Heading>
            <Text>{subheading}</Text>
          </div>
          <Image fluid={Nick} alt="Nick" className="landing-page__image" />
          <div className="landing-page__buttons">
            {
              buttons.map(({link, openNewTab, text}) => (
                <Button key={link} link={link} openNewTab={openNewTab}>{text}</Button>
              ))
            }
          </div>
          <ScrollIndicator text={scrollIndicator} className="landing-page__scroll-indicator" />
        </div>
      </Section>
      <Section>
        <Heading variant="sm">{storyHeading}</Heading>
        {
          stories.map(({ subheading, content, photo, quote: { content: quoteContent, author} }, index) => (
            <React.Fragment key={index}>
              {
                index % 2 === 0 ? (
                  <div className="story">
                    <div className="story__left">
                      <Subheading className="story__subheading">{subheading}</Subheading>
                      <Text className="story__text">{content}</Text>
                    </div>
                    <Spacer variant="md" />
                    <div className="story__right">
                      <Image className="story__image" fluid={photos[photo]} alt={photo} />
                      <Quote className="story__quote" author={author}>{quoteContent}</Quote>
                    </div>
                  </div>
                ) : (
                  <div className="story">
                    <div className="story__left">
                      <Image className="story__image" fluid={photos[photo]} alt={photo} />
                      <Spacer variant="sm" />
                      <Quote className="story__quote" author={author}>{quoteContent}</Quote>
                    </div>
                    <Spacer variant="md" />
                    <div className="story__right">
                      <Subheading className="story__subheading">{subheading}</Subheading>
                      <Text className="story__text">{content}</Text>
                    </div>
                  </div>
                )
              }
              <Spacer variant="md" />
            </React.Fragment>
          ))
        }
        <SocialMediaLine />
        <Spacer variant="md" />
      </Section>
    </Layout>
  )
}

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
        scrollIndicator
        storyHeading
        stories {
          subheading
          content
          photo
          quote {
            content
            author
          }
        }
      }
    }
    Nick: file(name: {eq: "Nick"}) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
    NickMountain: file(name: {eq: "Nick-mountain"}) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
    hang: file(name: {eq: "hang"}) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
    grass: file(name: {eq: "grass"}) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
    hangingout: file(name: {eq: "hangingout"}) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`