var Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // uncomment to create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())
    // .enableUrlLoader()
    // .configureUrlLoader({
    //     fonts: { limit: 4096 },
    //     images: { limit: 4096 }
    // })
    .enableSassLoader()
    .enablePostCssLoader((options) => {
        options.config = {
            path: 'postcss.config.js'
        }
    })

    // uncomment to define the assets of the project
    // .createSharedEntry('js/common')
    .addEntry('js/app', './assets/js/app.js')
    // .addEntry('js/app', './assets/js/app.js')
    .addStyleEntry('css/app', './assets/scss/app.scss')

    // uncomment if you use Sass/SCSS files
    // .enableSassLoader()

    // uncomment for legacy applications that require $/jQuery as a global variable
    // .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
