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