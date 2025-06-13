export function secureHeaders(app) {
  app.use((req, res, next) => {
    res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
    next();
  });
}
