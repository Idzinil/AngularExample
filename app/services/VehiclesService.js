app.factory('VehiclesService', ['$http', function ($http) {
    return $http.get('https://swapi.co/api/vehicles/')
      .success(function (data) {
        return data;
      })
      .error(function (err) {
        return err;
      });
  }]);