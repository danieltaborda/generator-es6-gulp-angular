var validator = require('./validators');
var cordovaConfig = require('./cordoba-config');

module.exports = {
    main: [
        {
            type: 'input',
            name: 'appName',
            message: '\nEnter a name for your project \nThis name will be displayed below the app icon.\n',
            validate: validator.validateAppName,
            default: this.appname, // Default to current folder name
            when: function () {
                // Show this prompt only if appName is not already set
                return !this.appName;
            }.bind(this)
        },        
        //description
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project',
            validate: validator.validateDescription,
            default: ''
        },
        //author name
        {
            type: 'input',
            name: 'userName',
            message: 'The author\'s name? (for config files)',
            validate: validator.validateUsername,
            default: ''
        },
        // ionic css
        {
            type: 'list',
            name: 'ionicCss',
            message: '\nInclude styles as CSS or Sass\n',
            choices: [
                {
                    name: 'Ionic CSS (faster, for starters)',
                    value: true
                },
                {
                    name: 'Ionic Sass (more flexible, for pros)',
                    value: false
                }
            ]
        },
        // select platforms
        {
            type: 'checkbox',
            name: 'platforms',
            message: '\nSelect Cordova platforms \nOnly works if you have the platforms correctly set up.\n',
            choices: cordovaConfig.platforms
        },
        // select plugins
        {
            type: 'checkbox',
            name: 'plugins',
            message: '\nSelect Cordova plugins \nInstall more later at any time.\n',
            choices: cordovaConfig.plugins
        },
    ]
};