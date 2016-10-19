(function(angular) {

	var app = angular.module('xamarin-app');

	app.controller('DemoCtrl', function($http, $location, $interval, $sessionStorage) {
		var storage = undefined;
		var url = undefined;
		
		function init() {
			storage = $sessionStorage.email;
			url = 'https://xamarin-api.herokuapp.com/api';

			if (!$sessionStorage.email) {
				$location.path('/');
			}
		}

		var interval = $interval(function() {
			chkSorteio();
		}, 3000);

		chkSorteio();

		function chkSorteio(){
			$http({
				method: 'GET',
				url: url+'/raffle',
			}).success(function(data, status) {
				console.log('Sorteio efetuado!');
				console.log(data);

				$interval.cancel(interval);

				for (var i = 0; i < data.length; i++) {
					if(storage === data[i].email) {
						$location.path('/ganhador'+data[i].number);
						$sessionStorage.winner = true;
					}
				}
				$location.path('/resultado');
		 	}).error(function(data, status) {
				if (status === 403) {
					console.log('Sorteio NÃO efetuado!');
				}
			});
			}
		});

})(angular);
