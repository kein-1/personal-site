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
        <LegalSection sectionId="imprint" heading="Techologies I Use" />
        <ProjectsSection sectionId="projects" heading="Personal Projects" />
        {/* <InterestsSection sectionId="details" heading="Technology Stack" /> */}
        {/* <ContactSection sectionId="github" heading="Issues?" /> */}
        <Animation type="fadeUp">
          <Section heading="Open Source">
            <p>TBD!</p>
          </Section>
        </Animation>
      </Page>
    </>
  )
}
