Package.describe({
  name: 'parlay:coinbase',
  summary: 'Coinbase API wrapper (API key auth only)',
  version: '1.0.0',
  git: 'https://github.com/parlaywithme/coinbase.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('parlay:coinbase.js', 'server');
  api.export('Coinbase', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('parlay:coinbase');
  api.addFiles('parlay:coinbase-tests.js', 'server');
});

Npm.depends({ 'coinbase-api': '0.2.1' });
