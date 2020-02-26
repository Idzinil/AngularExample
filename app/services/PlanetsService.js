app.factory('PlanetsService', ['$http', function ($http) {
    return $http.get('https://swapi.co/api/planets/')
      .success(function (data) {
        return data;
      })
      .error(function (err) {
        return err;
      });
  }]);