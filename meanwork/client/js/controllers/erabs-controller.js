app.controller('erabsController', ['$scope', '$resource', '$http', function ($scope, $resource, $http) {
  
  /*var Erab = $resource('/api/erabs');

  Erab.query(function (results) {
    $scope.erabs = results;
  });*/

  /*$scope.Erabs = $resource('/api/erabs', {});
  var $scope.erabs = $scope.Erabs.get({}, function() {
    
  });*/

  $scope.erabs = [];

  $http({
    method: 'GET',
    url: '/api/erabs'
  }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      console.log("Dena ondo erabs lortzen: "+angular.toJson(response));
      $scope.erab = angular.toJson(response.data);
      setTimeout(function(){console.log("emaitza: "+$scope.erab);},1000);
  }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status
      console.log("Errorea erabs lortzen: "+angular.toJson(response));
  });

  //$scope.erabiltzailea="jon";
  $scope.templateURL="notlogged";

  /*$scope.filmak =[]
  $scope.erabiltzaileak=[]
  $scope.erabiltzaileak.push("{izena:'Mikel',abizena:'Ocejo' posta:'mocejo@gmail.com', pasahitza:'123456'}");
  $scope.filmak.push("{izena:'Fast &amp; Furious 8',urtea:'2017' sinopsia:'When a mysterious woman seduces Dom into the world of terrorism and a betrayal of those closest to him, the crew face trials that will test them as never before.'}");
  $scope.filmak.push("{izena:' El bebé jefazo',urtea:'2017' sinopsia:'A suit-wearing briefcase-carrying baby pairs up with his seven-year old brother to stop the dastardly plot of the CEO of Puppy Co. '}");
  */$scope.izenaPatroia="/^[a-zA-Z]*$/"
  $scope.postaPatroia="/^[a-z0-9._%+-]+@[a-z0-9.-]+\\\.[a-z]{2,4}$/"
  $scope.pasahitzPatroia="/^(?=.*\\\d).{4,8}$/"
  $scope.filmakGehituAktibatua=false
  $scope.filmakBozkatuAktibatua=true
  $scope.lortuErabiltzaileaAktibatua=false
  $scope.erregistroAktibatua=false

  $scope.myFunc = function() {
    $scope.erregistroAktibatua=(!$scope.erregistroAktibatua);
  };
  $scope.aktibatuFilmakGehitu = function() {
    $scope.erregistroAktibatua=false
    $scope.filmakBozkatuAktibatua=false
    $scope.filmakGehituAktibatua=(!$scope.filmakGehituAktibatua);
  };
  $scope.aktibatuFilmakBozkatu = function() {
    $scope.erregistroAktibatua=false
    $scope.filmakGehituAktibatua=false
    $scope.filmakBozkatuAktibatua=(!$scope.filmakBozkatuAktibatua);
  };
  $scope.lortuErabiltzaileDatuak=function(){
    $scope.lortuErabiltzaileaAktibatua=!$scope.lortuErabiltzaileaAktibatua
    //Hemen erabiltzailea lortzeko funtzioa
  };

  $scope.bozkatu=function(){

    //Funtzio honek bozkak datu basean gordeko ditu

  };

  $scope.iz=" Frogetarako erabiltzailea"

  $scope.bilatuErab = function(posta, pass) {
    if(!posta || !pass) {
      console.log("Login eskaera hutsa "+posta+" "+pass);
    } else {
      var urlx = '/api/erab/'+posta+'/'+pass;
      console.log("Login eskaera: "+urlx);
      $http({
        method: 'GET',
        url: urlx
      }).then(function successCallback(response) {
        console.log("login erantzun zuzena: "+angular.toJson(response));
        if(response.data.length>0) {
          console.log("Login zuzena");
          $scope.erabiltzailea=posta; //erab izena data-tik
          delete $scope.posta;
          delete $scope.pass; 
          $scope.templateURL="logged";
        } else {
          console.log("Login okerra");
        }
      }, function errorCallback(response) {
        console.log("Login erantzun okerra: "+angular.toJson(response));
      });
    }
  };

  $scope.logout = function() {
    $scope.erabiltzailea="guest";
    $scope.templateURL="notlogged";
    console.log("Logout egina");
  };

  $scope.sortuErab = function () {
    var erab = new Erab();
    //Gehitu hemen entitatearen atributuak
    erab.izena = $scope.erabIzena;
    erab.abizena = $scope.erabAbizena;
    erab.postaElektronikoa = $scope.erabPosta;
    erab.pasahitza = $scope.erabPasahitza;
    erab.rol = 'user';
    erab.$save(function (result) {
      $scope.erabs.push(result);
      $scope.erabIzena = '';
    });

  }

  /*$scope.lortuErab= function(){
  $scope.loginPosta;
  $scope.loginPasahitza;
};*/

}]);

app.directive("tituloJumbotron", function() {
    return {
        restrict : "A",
        template : ""
        +"<div>"
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
app.directive("tituloJumbotronFilmak", function() {
    return {
        restrict : "A",
        template : ""
        +"<div>"
        +"<div class="+'"container">'
          +"<div class="+'"jumbotron text-justify">'
             +"<h1>Hau filmen gunea da</h1>"
              +"<p>Nabigatu aplikazioaren aukeretan ezkerreko barraren bitartez, erabili "
              +"eskuineko barraren bilatzaileak erabiltzaileak edo filmak aurkitzeko.</p>"

          +"</div>"
        +"</div>"
        +"</div>"
    };
});