module.exports = {
  email: 'mnpsnuwan@gmail.com',

  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/nuwan-samarasinghe',
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/mnpsnuwan',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/mnpsnuwan',
    },
    {
      name: 'ProjectEuler',
      url: 'https://projecteuler.net/progress=mnpsnuwan',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/mnpsnuwan',
    },
    {
      name: 'GitLab',
      url: 'https://gitlab.com/mnpsnuwan',
    },
    {
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/users/6265665/nuwan-samarasinghe?tab=profile',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#experience',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Education',
      url: '/#education',
    },
    {
      name: 'Skills',
      url: '/#skills',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    lightBlue: '#64efff',
    navy: '#0a192f',
    darkNavy: '#020c1b',
    red: '#ff2f00',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
