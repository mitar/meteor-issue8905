Package.describe({
  summary: "Simple dependency",
  version: '1.0.0'
});

Package.onUse(function (api) {
  api.use('ecmascript');
  api.addFiles('main.js');
});
