;(function () {

    "use strict";

    angular
        .module("app")
        .factory("ShotModel", ShotModel);

    ShotModel.$inject = ['$http'];

    function ShotModel($http) {
        
        let shots = {
            getAll: getAll,
            getOne: getOne
        };

        function getAll() {
            return $http.get('http://dev-api.mobile.design/api/shots')
        }

        function getOne(id) {
            return $http.get(`http://dev-api.mobile.design/api/shots/${id}`)
        }

        return shots;

    }

})();
