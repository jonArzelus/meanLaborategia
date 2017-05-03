app.controller('erabsController', ['$scope', '$resource', function ($scope, $resource) {
  var Erab = $resource('/api/erabs');

  Erab.query(function (results) {
    $scope.erabs = results;
  });

  $scope.erabs = []

  $scope.sortuErab = function () {
    var erab = new Erab();
    erab.izena = $scope.erabIzena;
    erab.$save(function (result) {
      $scope.erabs.push(result);
      $scope.erabIzena = '';
    });
  }
}]);