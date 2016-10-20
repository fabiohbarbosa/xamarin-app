(function(angular) {

	var app = angular.module('xamarin-app');

	app.controller('GanhadorCtrl', function($location, $sessionStorage) {
		if (!$sessionStorage.winner && !$sessionStorage.email) $location.path('/');
		if (!$sessionStorage.winner && $sessionStorage.email) $location.path('/demo'+Math.floor((Math.random() * 30) + 1));

		var interval = $interval(function() {
			chkEmail();
		}, 3000);

		chkEmail();

		function chkEmail(){
			$http({
				method: 'GET',
				url: url+'/email',
			}).success(function(data, status) {
				

				$interval.cancel(interval);

				var path = undefined;
				if(data.length == 0){
				$sessionStorage.email = null;
				$sessionStorage.winner = null;
				}
		 	}).error(function(data, status) {
				if (status === 403) {
					console.log('Sorteio NÃO efetuado!');
				}
			});

	});

})(angular);
