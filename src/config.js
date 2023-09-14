module.exports = {
  siteTitle: 'Nuwan Samarasinghe | Full Stack Software Engineer',
  siteDescription:
    'Nuwan Samarasinghe is a Full Stack Software Engineer at CodeGen International (Pvt) Ltd, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Nuwan Samarasinghe, Nuwan, Samarasinghe, mnpsnuwan, software developer, software engineer, software, full stack, full stack software engineer, web developer, java developer, sri lanka, colomobo, tempe, arizona, usa',
  siteUrl: 'https://mnpsnuwan.github.io/',
  siteLanguage: 'en_US',
  // googleAnalyticsID: '',
  // googleVerification: '',
  name: 'Nuwan Samarasinghe',
  location: 'Tempe, Arizona, USA',
  email: 'mnpsnuwan@gmail.com',
  github: 'https://github.com/mnpsnuwan',
  twitterHandle: '@NuwanPrabhath',

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
