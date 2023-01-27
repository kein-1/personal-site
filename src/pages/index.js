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

// NOTE: ALWAYS ADD AN ANCHOR TAG TO GET THE NAV BAR TO GO DOWN TO THE SECTION. THE SECTION
// IN SETTINGS.JSON MUST ALSO BE UPDATED

export default function IndexPage() {
  return (
    <>
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="About Me" />

        {/* <Animation type="fadeUp">
          <Section anchor="experience" heading="Experience">
            <p>Will update this section! Currently a Software Engineering Intern @ Arlite Technologies</p>
          </Section>
        </Animation> */}

        <Animation type="fadeUp">
          <Section heading="Technologies I Use">
            <img
              src="https://skillicons.dev/icons?i=py,js,java,react,nodejs,mongodb,express,postgres,tailwind,jest,git&perline=12"
              width="800"
            ></img>
          </Section>
        </Animation>
        <ProjectsSection sectionId="projects" heading="Personal Projects" />
        {/* <InterestsSection sectionId="details" heading="Interests" />
        <ContactSection sectionId="github" heading="Issues?" /> */}

        <Animation type="fadeUp">
          <Section anchor="opensource" heading="Open Source">
            <p>TBD!</p>
          </Section>
        </Animation>
      </Page>
    </>
  )
}
