var myApp = angular.module('myApp',[]);

var AppCtrl = function($scope, $http){
		$scope.GetLocation = function() {
       $http.get('/location').success(function(response){
		console.log('Got response');
		$scope.location = response;
	})
       .error(function(reason)
       {
       		$scope.error = "Could not fetch the data. Please try again later.";
       });
    };
};

myApp.controller('AppCtrl', AppCtrl);