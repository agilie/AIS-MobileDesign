;(function(){

    "use strict";

    angular
        .module("app")
        .directive("appShot", function () {
            return {
                scope: {
                    shot: '<'
                },
                restrict: 'E',
                templateUrl: "app/directives/shot.template.html"
            }
        })

})();
