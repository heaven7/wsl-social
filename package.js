Package.describe({
  name: 'heaven7:wsl-social',
  version: '0.0.1',
  summary: 'Social package',
  git: 'https://github.com/heaven7/wsl-social.git',
  documentation: 'README.md'
})

var both = ['client','server'],
    packages = [
        'heaven7:wsl-core@0.0.4',
        'heaven7:wsl-i18n@0.0.3_4',
        'heaven7:wsl-translations@0.0.4',
        'heaven7:wsl-files@0.0.3',
        'heaven7:wsl-alert@0.0.3',
        'heaven7:wsl-settings@0.0.3_1',
        'heaven7:wsl-permissions@0.0.3',
        'heaven7:wsl-theme-semantic-ui@0.0.4_1',
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
        'lib/both/collections.js',
        'lib/both/schemas/comments.js'
    ], both)

    api.addFiles([
        'lib/client/api.js',
        'lib/client/blocks/templates.html',
        'lib/client/blocks/templates.js',
        'lib/client/comments/helpers.js',
        'lib/client/comments/utils.js',
        'lib/client/comments/api.js',
        'lib/client/comments/templates.html',
        'lib/client/comments/templates.js',
        'lib/client/hearts/helpers.js',
        'lib/client/hearts/utils.js',
        'lib/client/hearts/api.js',
        'lib/client/ratings/templates.html',
        'lib/client/ratings/templates.js',
        'lib/client/reports/templates.html',
        'lib/client/reports/templates.js',
        'lib/client/views/templates.html',
        'lib/client/views/templates.js'
    ], 'client')


    api.addFiles([
        'lib/server/methods/hearts.js',
        'lib/server/methods/comments.js',
        'lib/server/publish.js'
    ], 'server')

    api.export([
        'Comments',
        'Social'
    ], both)

})
