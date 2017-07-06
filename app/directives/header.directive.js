;(function(){

  "use strict";

  angular
      .module("app")
      .directive("appHeader", function () {
          return {
              restrict: 'E',
              transclude: true,
              templateUrl: "app/directives/header.template.html"
          }
      })

})();
