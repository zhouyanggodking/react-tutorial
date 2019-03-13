const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { 
    target: 'https://ask.shannonai.com',
    changeOrigin: true,
    secure: false
  }));
};