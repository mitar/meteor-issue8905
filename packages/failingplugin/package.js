Package.describe({
  name: 'failingplugin',
  summary: "Failing plugin",
  version: '1.0.0'
});

Package.registerBuildPlugin({
  name: "failingPluginCompileTemplatesBatch",
  use: [
    'ecmascript@0.8.1',
    'simpledependency@1.0.0'
  ],
  sources: [
    'compile-templates.js'
  ]
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.5');

  api.use('isobuild:compiler-plugin@1.0.0');
});

Package.onTest(function (api) {
  api.use([
    'failingplugin'
  ]);
});
