import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconBookmark,
  IconCodepen,
  IconExternal,
  IconFacebook,
  IconFolder,
  IconFork,
  IconGitHub,
  IconGitLab,
  IconHackerRank,
  IconInstagram,
  IconLeetCode,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconPlayStore,
  IconProjectEuler,
  IconSqr,
  IconStackOverflow,
  IconStar,
  IconTwitter,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Bookmark':
      return <IconBookmark />;
    case 'Codepen':
      return <IconCodepen />;
    case 'External':
      return <IconExternal />;
    case 'Facebook':
      return <IconFacebook />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'GitLab':
      return <IconGitLab />;
    case 'HackerRank':
      return <IconHackerRank />;
    case 'Instagram':
      return <IconInstagram />;
    case 'LeetCode':
      return <IconLeetCode />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'ProjectEuler':
      return <IconProjectEuler />;
    case 'Sqr':
      return <IconSqr />;
    case 'StackOverflow':
      return <IconStackOverflow />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
