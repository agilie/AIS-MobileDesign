;(function () {

    "use strict";

    angular
        .module("app")
        .factory("ShotModel", ShotModel);

    ShotModel.$inject = ['$resource'];

    function ShotModel($resource) {
        
        var shots = {
            api: $resource('http://dev-api.mobile.design/api/shots/:id', {id: '@id'}, {
                updateMyFavoriteResource: {method: 'PUT'},
                checkDuplicate: {
                    method: 'GET',
                    url: 'http://dev-api.mobile.design/api/shots/check_duplicate'
                }
            })
        };

        return shots;

    }

})();
