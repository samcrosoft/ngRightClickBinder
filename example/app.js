(function() {
  var oAngTestApp;

  oAngTestApp = angular.module("AppNgTest", ["ngRightClickBinder"]);

  /*
   create a test controller
  */


  oAngTestApp.controller("TestCtrl", [
    "$scope", function($scope) {
      $scope.shoutOut = function() {
        alert("Kep Calm and Right Click!!!");
      };
    }
  ]);

}).call(this);
