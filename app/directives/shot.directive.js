;(function(){

    "use strict";

    angular
        .module("app")
        .directive("appShot", function () {
            return {
                scope: {
                    shot: '<'
                },
                controller: function ($state) {
                    this.goToShot = function(shotId) {
                        $state.go('shot', {id: shotId});
                    }
                },
                controllerAs: 'shotCtrl',
                restrict: 'E',
                templateUrl: "app/directives/shot.template.html"
            }
        })

})();
