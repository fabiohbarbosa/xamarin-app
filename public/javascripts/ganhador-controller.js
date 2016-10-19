(function(angular) {

	var app = angular.module('xamarin-app');

	app.controller('GanhadorCtrl', function($location, $sessionStorage) {
		if (!$sessionStorage.winner && !$sessionStorage.email) $location.path('/');
		if (!$sessionStorage.winner && $sessionStorage.email) $location.path('/demo'+Math.floor((Math.random() * 30) + 1));
	});

})(angular);
