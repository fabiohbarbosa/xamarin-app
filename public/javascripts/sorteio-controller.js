(function(angular) {
	var app = angular.module('xamarin-app');

	app.controller('SorteioCtrl', function($http, $location) {
		var vm = this;
		var url = 'https://xamarin-api.herokuapp.com/api';

		init();

		function init() {
			vm.block = false;
			vm.title = 'Sorteio!';
			vm.enviarEmail = enviarEmail;
		}

		function enviarEmail(email) {
			vm.block = true;

			$http({
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				url: url+'/email',
				data: { email: email }
			}).success(function(status, data) {
				var rand = Math.floor((Math.random() * 30) + 1);
				$location.path('/demo'+rand);
				vm.block = false;
			}).error(function(data, status) {
				if (status === 400) {
					// TODO subir erro de e-mail duplicado
				} else {
					// TODO erro da aplicação
				}
				vm.block = false;
			});
			
		}

	});
})(angular);
