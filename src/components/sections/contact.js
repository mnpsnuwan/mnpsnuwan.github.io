import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { IconInstagram, IconTwitter, IconFacebook } from '@components/icons';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--light-blue);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .social-media {
    display: inline-block;
    position: relative;
    height: 30px;
    width: 30px;
    top: 5px;
    margin: 5px;
    left: 0;
    z-index: -1;
    @media (prefers-reduced-motion: no-preference) {
      transition: var(--transition);
    }
  }
  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch Or Hire Me!</h2>

      <p>
        I prefer you contact me at my email address as my inbox is always open for you. Whether you
        have a question or just want to hire me, I’ll try my best to get back to you.
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        HIRE ME!
      </a>

      <br />
      <br />
      <p>Or you could reach me at my social media accounts</p>
      <a href="https://www.facebook.com/MNPSamarasinghe" target="_blank" rel="noreferrer">
        <div className="social-media">
          <IconFacebook />
        </div>
      </a>
      <a href="https://www.instagram.com/mnpsnuwan" target="_blank" rel="noreferrer">
        <div className="social-media">
          <IconInstagram />
        </div>
      </a>
      <a href="https://twitter.com/NuwanPrabhath" target="_blank" rel="noreferrer">
        <div className="social-media">
          <IconTwitter />
        </div>
      </a>
    </StyledContactSection>
  );
};

export default Contact;
