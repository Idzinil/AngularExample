app.controller('CaracteristicsController', function ($scope, $rootScope, StarshipsService, PlanetsService, VehiclesService, SpeciesService) {
    $scope.edad = "29";
    console.log($rootScope);

    StarshipsService.success(function (data) {
        for(i=0; i<data.results.length; i++) {
            console.log('data.results :', data.results[i].name);
            $scope.starships = data.results[i].name;
        }
    });

    PlanetsService.success(function (data) {
        $scope.planets = data;
        console.log('data planets :', data);
    });

    VehiclesService.success(function (data) {
        $scope.vehicles = data;
        console.log('data vehicles :', data);
    });

    SpeciesService.success(function (data) {
        $scope.species = data;
        console.log('data species :', data);
    });
});
