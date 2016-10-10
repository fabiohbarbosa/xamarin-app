(function(angular) {
	var app = angular.module('xamarin-app');

	app.controller('SorteioCtrl', function($http) {
		var vm = this;
		init();

		function init() {
			vm.title = 'Teste';
			vm.salvar = salvar;
		}

		$http.get('http://gsw-xamarin-app.herokuapp.com/api/raffle').success(function(data) {
			console.log('success');
			console.log(data);
		});

		function salvar() {
			console.log('Salvar');
		}

	});
})(angular);
