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
}}) => {
  const photos = { paw };

  return (
    <div>
      <Layout>
        <SEO title={title} />
        <Heading>{heading}</Heading>
        <Spacer variant='md' />
      </Layout>
      <HorizontalContainer
        Card={BigCard} 
        data={experiences}
        photos={photos}
        filter="title"
      />
      <Layout>
        <Spacer variant='lg' />
        <Heading>{secondHeading}</Heading>
        <Spacer variant='md' />
      </Layout>
      <HorizontalContainer
        Card={BigCard} 
        data={projects}
        photos={photos}
        filter="title"
      />
      <Layout>
        <Spacer variant='lg' />
        <Heading>{thirdHeading}</Heading>
        <Spacer variant='md' />
        <div className="awards-container">
          {
            awards.map(award => 
              <Card
                {...award}
                picture={{ fluid: photos[award.picture.name], ...award.picture }}
              />
            )
          }
        </div>

        <Spacer variant='lg' />
        <Heading lineColor="#F66733">{fourthHeading}</Heading>
        <CardHeading
          title={major}
          titleColor="#323F4B"
          company={school}
          timespan={minor}
        >
          {gpa}
        </CardHeading>
        <Spacer variant="md" />
        <Subheading>{subheading}</Subheading>
        <div className="awards-container">
          {
            classes.map(class1 => 
              <Card {...class1} />
            )
          }
        </div>
      </Layout>
    </div>
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
          description
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
  }
`