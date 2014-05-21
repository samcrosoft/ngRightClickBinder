###
 This directive will make it possible to bind the enter key to an element
 @author Adebola Olowofela
 @url   http://blog.samcrosoft.com
 @email samcrosoft@gmail.com - 
###
((ng) ->
    # the event to be mapped to
    _ELEMENT_EVENT = "contextmenu"

    # create the module declaration
    oNgEnterBinder = angular.module('ngRightClickBinder', ["ng"])

    # create the on -enter directive
    oNgEnterBinder.directive "onRightClick", ['$parse', ($parse) ->
        oDirective = 
            restrict: "A"
            link: ($scope, element, attrs, oController) ->
                # parse the supplied function into a callback
                oCallback = $parse(attrs.onRightClick)

                element.bind "#{_ELEMENT_EVENT}", (event) ->
                    $scope.$apply ()->
                        oCallback $scope, {$event: event}
                        return

                    event.preventDefault()
                    return
                return

        return oDirective


        return ]

    return
)(angular) 