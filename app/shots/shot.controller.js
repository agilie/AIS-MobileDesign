;(function () {

    "use strict";

    angular
        .module("app")
        .controller("ShotController", ShotController);

    ShotController.$inject = ['ShotModel', '$stateParams'];

    function ShotController(ShotModel, $stateParams) {
        var vm = this;

        vm.model = {
            shot: ShotModel.api.get({id: $stateParams.id})
        };

    }

})();