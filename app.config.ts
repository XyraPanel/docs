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
    discord: 'https://discord.com/invite/NXdctQnMjs',
  },
  github: {
    url: 'https://github.com/XyraPanel/docs',
    branch: 'main',
  },
  toc: {
    title: 'On this page',
    bottom: {
      title: 'Community',
      links: [{
        icon: 'ic:baseline-discord',
        label: 'Join our Discord',
        to: 'https://discord.com/invite/NXdctQnMjs',
        target: '_blank'
      },
      {
        icon: 'material-icon-theme:github-sponsors',
        label: 'Become a Sponsor',
        to: 'https://ko-fi.com/26bz',
        target: '_blank'
      }]
    }
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'zinc'
    }
  }
})
