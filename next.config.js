const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  images: {},
  async redirects() {
    return [
      {
        source: '/solutions/ohconsulting',
        destination:
          'https://osmiumcg.notion.site/560c01fc90ad406da09544617f04d6f1',
        basePath: false,
        permanent: true,
      },
    ]
  },
}
