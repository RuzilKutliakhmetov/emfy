const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/oauth',
    createProxyMiddleware({
      target: 'https://www.amocrm.ru',
      changeOrigin: true,
    })
  );
};
