'use strict';

//var _s = require('underscore.string');
var config = require('./config.js');
var strings = require('./strings');

module.exports = {
    /**
     * transforms user input into a useful modulename for angular
     * @param  {String} userInput arbitrary user input
     * @return {String}           angular-friendly module name
     */
    moduleName: function (userInput) {
        return strings.textToCamel(userInput);
    },
      /**
   * transforms user input from text to snake-case
   * @param  {String} userInput free text
   * @return {String}           snake-case string
   */
  appBowerName: function (userInput) {
    var string = strings.textToCamel(userInput);
    string = strings.camelToSnake(string);
    return string;
  },
    /**
   * returns a random ionic bar color
   * @return {String} ionic color
   */
  barColor: function () {
    return config.IONIC_COLORS[Math.floor(Math.random() * config.IONIC_COLORS.length)];
  }
};