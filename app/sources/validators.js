'use strict';

module.exports = {

    validateAppName: function (appName) {
        if (!appName) {
            return 'Project name cannot be empty';
        }
        if (!/\w+/.test(appName)) {
            return 'Project name should only consist of 0~9, a~z, A~Z, _, .';
        }   
        return true;
    },

    validateAppId: function (userInput) {
        var pattern = /^[a-z][a-z0-9_]*(\.[a-z0-9_]+)+[0-9a-z_]$/i;
        return pattern.test(userInput) ? true : 'Please enter a valid bundle identifier! E.g. com.company.project';
    },

    validateDescription: function (description) {
        if (!/\w+/.test(description)) {
            return 'Project name should only consist of 0~9, a~z, A~Z, _, .';
        }
        return true;
    },

    validateUsername: function (username) {
        if (!/\w+/.test(username)) {
            return 'Project name should only consist of 0~9, a~z, A~Z, _, .';
        }
        return true;
    }
};