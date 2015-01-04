Package.describe({
  name: 'parlay:coinbase',
  summary: 'Coinbase API using API key auth',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('parlay:coinbase.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('parlay:coinbase');
  api.addFiles('parlay:coinbase-tests.js');
});
