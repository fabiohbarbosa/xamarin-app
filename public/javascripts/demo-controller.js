(function(angular) {

	var app = angular.module('xamarin-app');

	app.controller('DemoCtrl', function($http, $location, $interval, $sessionStorage) {
		var url = 'https://xamarin-api.herokuapp.com/api';
		var storage = $sessionStorage.email;

		var interval = $interval(function() {
			chkSorteio();
		}, 3000);

		chkSorteio();

		function chkSorteio(){
			$http({
				method: 'GET',
				url: url+'/raffle',
			}).success(function(data, status) {
				console.log(storage);
				console.log('Sorteio efetuado!');
				console.log(data);

				$interval.cancel(interval);

				for (var i = 0; i < data.length; i++) {
					console.log(data[i].email);
					if(storage === data[i].email) {
						$location.path('/ganhador'+data[i].number);
					}
				}
				// $location.path('/resultado');
		 	}).error(function(data, status) {
				if (status === 403) {
					console.log('Sorteio NÃO efetuado!');
				}
			});
			}
		});

})(angular);
