import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--light-blue);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--light-blue);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(1%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--light-blue);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Java', 'Spring Boot', 'TypeScript', 'Angular', 'Oracle', 'MySql'];
  const testingTools = ['Yourkit', 'VisualVm', 'Jmeter', 'Jprofiler', 'Grafana', 'Prometheus'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I'm Nuwan Samarasinghe, a passionate Lead Full Stack Software Engineer with
              over 7 years of experience. My journey in web development, scalable system design,
              research and development, and enterprise application development began in 2017 after
              graduating from the University of Colombo School of Computing, Sri Lanka.
            </p>
            <p>
              I specialize in building and maintaining REST/SOAP web services and Client
              Applications within large-scale distributed enterprise software services (SaaS). My
              expertise extends to Search Optimization, Load Testing, and Performance Tuning,
              utilizing tools like;
              <ul className="skills-list">
                {testingTools && testingTools.map((tools, i) => <li key={i}>{tools}</li>)}
              </ul>
            </p>
            <p>
              With a focus on the Travel domain, I've contributed to systems in Ferry booking, Hotel
              booking, H2H systems, and flight booking domains. Currently, I serve as an Associate
              Technical Team Lead at{' '}
              <a href="https://codegen.co.uk/" target="_blank" rel="noreferrer">
                Codegen International (Pvt) Ltd
              </a>
              .
            </p>

            <p>My recent tech stack includes;</p>
          </div>
          <p>
            <ul className="skills-list">
              {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </p>
          <p>
            I take pride in creating solutions that thrive on the internet and contribute to the
            ever-evolving field of software engineering.
          </p>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
