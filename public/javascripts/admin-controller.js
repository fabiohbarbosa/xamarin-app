
(function(angular) {
	var app = angular.module('xamarin-app');

	app.controller('AdminCtrl', function($http, $location, $sessionStorage, $interval) {
		var vm = this;
		var url = 'https://xamarin-api.herokuapp.com/api';

		init();

		function init() {
			vm.title = 'Admin';
			vm.emails = [];
			vm.raffle = raffle;
			vm.cancel = cancel;
			vm.delete = deleteEmails;
			loadEmails();
		}

		var interval = $interval(function() {
			loadEmails();
		}, 3000);

		function loadEmails() {
			$http({
				method: 'GET',
				url: url+'/email'
			}).success(function(data, status) {
				vm.emails = data;
			}).error(function(data, status) {
				console.error(data);
				console.error(status);
			});
		}

		function raffle() {
			$http({
				method: 'POST',
				url: url+'/raffle'
			}).success(function(data, status) {
				loadEmails();
			}).error(function(data, status) {
				console.error(data);
				console.error(status);
			});
		}

		function cancel() {
			$http({
				method: 'DELETE',
				url: url+'/raffle'
			}).success(function(data, status) {
				loadEmails();
			}).error(function(data, status) {
				console.error(data);
				console.error(status);
			});
		}

		function deleteEmails() {
			$http({
				method: 'DELETE',
				url: url+'/email'
			}).success(function(data, status) {
				loadEmails();
			}).error(function(data, status) {
				console.error(data);
				console.error(status);
			});
		}

	});
})(angular);
