/**
 * Created by Umayr Shahid on 9/16/2015.
 */

if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports) {
  module.exports = 'cressida';
}

(function (window, angular) {
  'use strict';

  var cressida = require('cressida');

  module.exports = angular
    .module('cressida', [])
    .factory('$cressida', function () {
      var instance = null;

      function create(options) {
        instance = cressida.create(options);
        return instance;
      }

      function message() {
        return instance === null ? create() : instance;
      }

      return {
        create: create,
        message: message
      };
    });

}(window, window.angular));
