app.controller('erabsController', ['$scope', '$resource', function ($scope, $resource) {
  var Erab = $resource('/api/erabs');

  Erab.query(function (results) {
    $scope.erabs = results;
  });

  $scope.erabs = []

  $scope.erregistroAktibatua=false
  $scope.myFunc = function() {

        $scope.erregistroAktibatua=(!$scope.erregistroAktibatua);
    };

  $scope.sortuErab = function () {
    var erab = new Erab();
    erab.izena = $scope.erabIzena;
    erab.abizena = $scope.erabAbizena;
    erab.posta =$scope.erabPosta;
    erab.pasahitza=$scope.erabPasahitza;
    //Gehitu hemen entitatearen atributuak
    erab.$save(function (result) {
      $scope.erabs.push(result);
      $scope.erabIzena = '';
    });
  }
}]);
app.directive("tituloJumbotron", function() {
    return {
        restrict : "A",
        template : ""
        +"<div ng-controller="+'"erabsController"'+">"
        +"<div class="+'"container">'
          +"<div class="+'"jumbotron text-justify">'
             +"<h1>Ongi etorria!</h1>"
              +"<p>Aplikazio honetan behin erresgistratuta, eta saioa hasita, zure gustoko "
              +"filmak bozkatzeko aukera izango duzu, baita zure pelikula propioak gehitzeko ere.</p>"

          +"</div>"
        +"</div>"
        +"</div>"
    };
});