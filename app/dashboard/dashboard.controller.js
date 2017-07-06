;(function () {

    "use strict";

    angular
        .module("app")
        .controller("DashboardController", DashboardController);

    DashboardController.$inject = ['ShotModel'];

    function DashboardController(ShotModel) {
        let vm = this;

        vm.model = {
            shotResponse: ShotModel.api.get()
        };

        ShotModel.api.checkDuplicate({image_url: 'http://dev-api.mobile.design/uploads/shots/606cc34c173533f93ee79d556b1fc556a9e32226.?1498474673'})
            .$promise.then((response) => console.log(response));

    }

})();