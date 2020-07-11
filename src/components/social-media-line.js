import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import useDarkMode from 'use-dark-mode'
import Mail from '../assets/mail.svg'
import Pdf from '../assets/pdf.svg'
import resume from '../assets/resume.pdf'
import Image from './image'

import './social-media-line.scss'

const SocialMediaLine = () => {
  const pictures = useStaticQuery(graphql`
    query SocialMediaQuery {
      facebook: file(name: {eq: "facebook"}) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      instagram: file(name: {eq: "instagram"}) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      github: file(name: {eq: "github"}) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      githubLight: file(name: {eq: "github-light"}) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      dribbble: file(name: {eq: "dribbble"}) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      linkedin: file(name: {eq: "linkedin"}) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)

  const { value: isDark } = useDarkMode(false)

  return (
    <div className="social-media-line">
      <a href={resume} target="__blank">
        <Pdf className="social-media-line__image" />
      </a>
      <a href="mailto:support@example.com">
        <Mail className="social-media-line__image" />
      </a>
      <Image
        alt="LinkedIn"
        fluid={pictures.linkedin.childCloudinaryAsset.fluid}
        outline={false}
        className="social-media-line__image"
        link="https://www.linkedin.com/in/nicholas-gustafson/"
      />
      <Image
        alt="github"
        fluid={isDark ?
          pictures.githubLight.childCloudinaryAsset.fluid :
          pictures.github.childCloudinaryAsset.fluid }
        outline={false}
        className="social-media-line__image"
        link="https://github.com/GusTheBusNG"
      />
      <Image
        alt="instagram"
        fluid={pictures.instagram.childCloudinaryAsset.fluid}
        outline={false}
        className="social-media-line__image"
        link="https://www.instagram.com/gusthebusng/"
      />
      <Image
        alt="facebook"
        fluid={pictures.facebook.childCloudinaryAsset.fluid}
        outline={false}
        className="social-media-line__image"
        link="https://www.facebook.com/nicholas.gustafson.14"
      />
      <Image
        alt="dribbble"
        fluid={pictures.dribbble.childCloudinaryAsset.fluid}
        outline={false}
        className="social-media-line__image"
        link="https://dribbble.com/GusTheBus"
      />
      <div className="social-media-line__line" />
    </div>
  );
}

export default SocialMediaLine