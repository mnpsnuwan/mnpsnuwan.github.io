import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledEducationSection = styled.section`
  max-width: 1000px;

  .inner {
    display: grid;
    grid-template-columns: 8fr 2fr;
    grid-gap: 50px;

    @media (max-width: 868px) {
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

const Education = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledEducationSection id="education" ref={revealContainer}>
      <h2 className="heading">Education</h2>

      <div className="inner">
        <StyledText>
          <div>
            <h2>
              <a href="https://ucsc.cmb.ac.lk" target="_blank" rel="noreferrer">
                University of Colombo School of Computing, Sri Lanka
              </a>
            </h2>
            <span className="range">(Feb 2014 - Mar 2017)</span>

            <p>Bachelor of Science in Computer Science.</p>

            <h2>
              <a href="https://sac-kuru.com" target="_blank" rel="noreferrer">
                St. Anne's College, Sri Lanka
              </a>
            </h2>
            <span className="range">(2008 - 2011)</span>

            <p>Advanced Level in Mathematics Stream.</p>
          </div>
        </StyledText>
      </div>
    </StyledEducationSection>
  );
};

export default Education;
