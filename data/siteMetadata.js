const siteMetadata = {
  title: 'Max Barajas - Research Portfolio',
  author: 'Max Barajas',
  headerTitle: 'MaxBarajas',
  description:
    'Applied mathematics student and AI analyst. Research in optimization, networks, and machine learning.',
  language: 'en-us',
  theme: 'dark', // System, dark or light
  siteUrl: 'https://maxbarajas.com',
  siteRepo: 'https://github.com/maximilianobarajas/max-portfolio',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'maxbarajas027@gmail.com',
  github: 'https://github.com/maximilianobarajas',
  linkedin: 'https://www.linkedin.com/in/max-barajas',
  locale: 'en-US',
  analytics: {
    googleAnalyticsId: '',
  },
  // 👇 AGREGAR ESTO ES VITAL PARA QUE NO TRUENE 👇
  newsletter: {
    provider: '', // Dejar vacío evita que el código busque claves API
  },
}

module.exports = siteMetadata
