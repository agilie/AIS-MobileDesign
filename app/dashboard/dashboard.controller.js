;(function () {

    "use strict";

    angular
        .module("app")
        .controller("DashboardController", DashboardController);

    DashboardController.$inject = ['ShotModel'];

    function DashboardController(ShotModel) {
        let vm = this;

        vm.model = {
            shots: []
        };

        activate();

        function activate() {
            ShotModel.getAll().then(
                response => vm.model.shots = response.data.shots
            )
        }
    }

})();