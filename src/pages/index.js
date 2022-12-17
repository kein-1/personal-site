import React from 'react'
import {
  AboutSection,
  Animation,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  LegalSection,
  Page,
  ProjectsSection,
  Section,
} from 'gatsby-theme-portfolio-minimal'

export default function IndexPage() {
  return (
    <>
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}

        <AboutSection sectionId="about" heading="About Me" />
        {/* <AboutSection sectionId="about-2" heading="About Me2" /> */}
        <ProjectsSection sectionId="projects" heading="Personal Projects" />
        {/* <InterestsSection sectionId="details" heading="Technology Stack" /> */}
        {/* <ContactSection sectionId="github" heading="Issues?" /> */}
      </Page>
    </>
  )
}
