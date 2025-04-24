angular.module('FlagApp').service('FlagService', function ($http) {
    const BASE_URL = 'http://localhost:3000/evaluate';
  
    this.evaluate = function (candidateData) {
      return $http.post(BASE_URL, candidateData);
    };
  });
  