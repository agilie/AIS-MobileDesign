;(function(){

  "use strict";

  angular
      .module("app")
      .config(function($stateProvider, $locationProvider) {

          $locationProvider.html5Mode(true);

          $stateProvider
              .state('dashboard', {
                  url: '/',
                  controller: 'DashboardController',
                  controllerAs: 'vm',
                  templateUrl: 'app/dashboard/dashboard.html'
              })
              .state('collections', {
                  url: '/collections',
                  templateUrl: 'app/collections/collections.html'
              })
              .state('shot', {
                  url: '/shots/:id',
                  controller: 'ShotController',
                  controllerAs: 'vm',
                  templateUrl: 'app/shots/shot.html'
              });
      });
})();