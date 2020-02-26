var app = angular.module("myApp", ['ngRoute'])
app.config(function ($routeProvider) {
    $routeProvider
        .when('/switch', {
            controller: 'SwitchController',
            templateUrl: 'app/pages/switch/switch.html'
        })
        .when('/caracteristics', {
            controller: 'CaracteristicsController',
            templateUrl: 'app/pages/caracteristics/caracteristics.html'
        })
        .otherwise({
            redirectTo: '/switch'
        });
});
