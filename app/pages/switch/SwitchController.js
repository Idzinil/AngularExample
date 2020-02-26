app.controller('SwitchController', SwitchController);

function SwitchController($scope, $rootScope, ComputerService, $location) {
    $scope.name ="Idzinil"
    //console.log($rootScope)
    //$location.path('/caracteristics')
    $scope.toggleComputer = function() {
        /*setTimeout( function() {
            console.log($location.path('/caracteristics'))
        },  30000)*/
        ComputerService.toggleComputer()
    }    
}
