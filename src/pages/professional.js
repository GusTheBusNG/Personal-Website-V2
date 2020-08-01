import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Heading from '../components/heading'
import BigCard from '../components/cards/bigCard'
import HorizontalContainer from '../components/horizontal-container'
import Spacer from '../components/spacer'
import Card from '../components/cards/mediumCard'
import CardHeading from '../components/cards/cardHeading'
import Subheading from '../components/subheading'
import SocialMediaLine from '../components/social-media-line'
import Section from '../components/section'

import './professional.scss';

const ProfessionalPage = ({ data: { markdownRemark: { frontmatter: {
    title,
    heading,
    experiences,
    secondHeading,
    projects,
    thirdHeading,
    awards,
    fourthHeading,
    school,
    major,
    minor,
    gpa,
    subheading,
    classes
  }},
  paw: { childCloudinaryAsset: { fluid: paw }},
  bmw: { childCloudinaryAsset: { fluid: bmw }},
  eagleScout: { childCloudinaryAsset: { fluid: eagleScout }},
  tsa: { childCloudinaryAsset: { fluid: tsa }},
  salkehatchie: { childCloudinaryAsset: { fluid: salkehatchie }},
  honorbandofamerica: { childCloudinaryAsset: { fluid: honorbandofamerica }},
  fca: { childCloudinaryAsset: { fluid: fca }},
  medidata: { childCloudinaryAsset: { fluid: medidata }},
}}) => {
  const photos = { paw, bmw, eagleScout, tsa, salkehatchie, honorbandofamerica, fca, medidata };

  return (
    <Layout>
      <SEO title={title} />
      <Section noPadding={
        <HorizontalContainer
          Card={BigCard} 
          data={experiences}
          photos={photos}
          filter="title"
        />
      }>
        <Spacer variant='md' />
        <Heading>{heading}</Heading>
        <Spacer variant='md' />
      </Section>
        
      <Section noPadding={
        <HorizontalContainer
          Card={BigCard} 
          data={projects}
          photos={photos}
          filter="title"
        />
      }>
        <Spacer variant='lg' />
        <Heading>{secondHeading}</Heading>
        <Spacer variant='md' />
      </Section>

      <Section>
        <Spacer variant='lg' />
        <Heading>{thirdHeading}</Heading>
        <Spacer variant='md' />
        <div className="awards-container">
          {
            awards.map((award, index) => 
              <Card
                key={index}
                {...award}
                picture={{ fluid: photos[award.picture.name], ...award.picture }}
              />
            )
          }
        </div>
      </Section>

      <Section>
        <Spacer variant='lg' />
        <Heading lineColor="#F66733">{fourthHeading}</Heading>
        <CardHeading
          title={major}
          company={school}
          timespan={minor}
        >
          {gpa}
        </CardHeading>
        <Spacer variant="md" />
        <Subheading>{subheading}</Subheading>
        <Spacer variant="sm" />
        <div className="awards-container">
          {
            classes.map((class1, index) => 
              <Card key={index} {...class1} />
            )
          }
        </div>
      </Section>

      <Section>
        <SocialMediaLine />
      </Section>
    </Layout>
  )
}

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
        secondHeading
        projects {
          title
          timespan
          picture {
            name
            link
          }
          button {
            openNewTab
            link
            text
          }
          bullets
          technologies
        }
        thirdHeading
        awards {
          title
          company
          timespan
          picture {
            name
            link
          }
        }
        fourthHeading
        school
        major
        minor
        gpa
        subheading
        classes {
          title
          timespan
          description
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
    bmw: file(name: {eq: "bmw"}) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
    eagleScout: file(name: {eq: "eagleScout"}) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
    tsa: file(name: {eq: "tsa"}) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
    salkehatchie: file(name: {eq: "salkehatchie"}) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
    honorbandofamerica: file(name: {eq: "honorbandofamerica"}) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
    fca: file(name: {eq: "fca"}) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
    medidata: file(name: {eq: "medidata"}) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`