export default defineAppConfig({
  header: {
    // Title to display if no logo
    title: 'XyraPanel',
    // Logo configuration
    logo: {
      alt: '',
      // Light mode
      light: '',
      // Dark mode
      dark: ''
    },
  },
  socials: {
    discord: 'https://xyrapanel.com/discord',
  },
  github: {
    url: 'https://github.com/XyraPanel/docs',
    branch: 'main',
  },
  toc: {
    title: 'On this page',
    bottom: {
      title: 'Community',
      links: [
      {
        icon: 'material-icon-theme:github-sponsors',
        label: 'Become a Sponsor',
        to: 'https://ko-fi.com/26bz',
        target: '_blank'
      },
     {
        icon: 'material-symbols:groups',
        label: 'Contributors',
        to: 'https://github.com/XyraPanel/panel/graphs/contributors',
        target: '_blank'
      },{
        icon: 'ic:baseline-discord',
        label: 'Join our Discord',
        to: 'https://xyrapanel.com/discord',
        target: '_blank'
      },]
    }
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'zinc'
    }
  }
})
