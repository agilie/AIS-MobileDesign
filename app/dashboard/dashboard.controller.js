;(function () {

    "use strict";

    angular
        .module("app")
        .controller("DashboardController", DashboardController);

    DashboardController.$inject = ['ShotModel'];

    function DashboardController(ShotModel) {
        var vm = this;

        vm.model = {
            shotResponse: ShotModel.api.get()
        };

    }

})();