;(function () {

    "use strict";

    angular
        .module("app")
        .controller("ShotController", ShotController);

    ShotController.$inject = ['ShotModel', '$stateParams'];

    function ShotController(ShotModel, $stateParams) {
        let vm = this;

        vm.model = {
            shot: {}
        };

        activate();

        function activate() {
            ShotModel.getOne($stateParams.id).then(
                response => vm.model.shot = response.data
            )
        }
    }

})();