oAngTestApp = angular.module "AppNgTest", ["ngRightClickBinder"]


###
 create a test controller
###

oAngTestApp.controller("TestCtrl", ["$scope", ($scope) ->

	$scope.shoutOut = () ->
		alert "Kep Calm and Right Click!!!"
		return

	return
])