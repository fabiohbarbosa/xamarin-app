
(function(angular) {
	var app = angular.module('xamarin-app');

	app.controller('CadastroCtrl', function($http, $location, $sessionStorage) {
		var vm = this;
		var url = 'https://xamarin-api.herokuapp.com/api';

		init();

		function init() {
			vm.block = false;
			vm.title = 'Sorteio!';
			vm.enviarEmail = enviarEmail;

			if ($sessionStorage.email) {
				var rand = randomDemo();
				$location.path('/demo'+rand);
			}
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
			}).success(function(status, data ) {
				var rand = randomDemo();
				$location.path('/demo'+rand);
				vm.block = false;

				$sessionStorage.email = email;


			}).error(function(data, status) {
				if (status === 400) {
					// TODO subir erro de e-mail duplicado
				} else {
					// TODO erro da aplicação
				}
				vm.block = false;
			});

		}

		function randomDemo() {
			return Math.floor((Math.random() * 30) + 1);
		}
});
})(angular);
