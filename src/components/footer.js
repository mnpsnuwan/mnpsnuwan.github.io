import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const Footer = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
  }, []);

  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>

      <StyledCredit tabindex="-1">
        <div>
          Copyright © 2023-2025
          <a href="https://mnpsnuwan.github.io">mnpsnuwan.github.io</a>Powered By
          <a href="https://imatrixlabs.com">IMATRIXLABS (PVT) LTD.</a>
        </div>
        <div>All Rights Reserved.</div>
      </StyledCredit>
    </StyledFooter>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
