/*
 This directive will make it possible to bind the enter key to an element
 @author Adebola Olowofela
 @url   http://blog.samcrosoft.com
 @email samcrosoft@gmail.com -
*/


(function() {
  (function(ng) {
    var oNgEnterBinder, _ELEMENT_EVENT;
    _ELEMENT_EVENT = "contextmenu";
    oNgEnterBinder = angular.module('ngRightClickBinder', ["ng"]);
    oNgEnterBinder.directive("onRightClick", [
      '$parse', function($parse) {
        var oDirective;
        oDirective = {
          restrict: "A",
          link: function($scope, element, attrs, oController) {
            var oCallback;
            oCallback = $parse(attrs.onRightClick);
            element.bind("" + _ELEMENT_EVENT, function(event) {
              $scope.$apply(function() {
                oCallback($scope, {
                  $event: event
                });
              });
              event.preventDefault();
            });
          }
        };
        return oDirective;
      }
    ]);
  })(angular);

}).call(this);
