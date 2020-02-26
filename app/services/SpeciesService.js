app.factory('SpeciesService', ['$http', function ($http) {
    return $http.get('https://swapi.co/api/species/?format=json')
      .success(function (data) {
        return data;
      })
      .error(function (err) {
        return err;
      });
  }]);