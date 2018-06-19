const nextRoutes = require('next-routes')
const Router = nextRoutes()

Router.add('overview', '/')
  .add('overview', '/:slug', '')
  .add('detail', '/detail/:type/:slug', '')
  .add('edit', '/:mode/:type/:slug', '')

module.exports = Router
