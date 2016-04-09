Package.describe({
  name: 'heaven7:wsl-social',
  version: '0.0.1',
  summary: 'Social package',
  git: 'https://github.com/heaven7/wsl-social.git',
  documentation: 'README.md'
})

var both = ['client','server'],
    packages = [
        'heaven7:wsl-i18n@0.0.3_4',
        'heaven7:wsl-translations@0.0.4',
        'heaven7:wsl-files@0.0.3',
        'heaven7:wsl-settings@0.0.3_1',
        'jquery',
        'blaze-html-templates',
        'ecmascript',
        'es5-shim',
        'reactive-var'
    ]
Package.onUse(function(api) {
    api.versionsFrom('1.2')
    api.use(packages, both)
    api.imply(packages)

    api.addFiles([
        'lib/both/collections.js'
    ], both)

    api.addFiles([
        'lib/client/blocks/templates.html',
        'lib/client/blocks/templates.js',
        'lib/client/comments/templates.html',
        'lib/client/comments/templates.js',
        'lib/client/hearts/templates.html',
        'lib/client/hearts/templates.js',
        'lib/client/ratings/templates.html',
        'lib/client/ratings/templates.js',
        'lib/client/reports/templates.html',
        'lib/client/reports/templates.js',
        'lib/client/views/templates.html',
        'lib/client/views/templates.js'
    ], 'client')


    api.addFiles([
        'lib/server/allow.js',
        'lib/server/methods.js',
        'lib/server/publish.js'
    ], 'server')
})
