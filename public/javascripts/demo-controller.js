(function(angular) {

	var app = angular.module('xamarin-app');

	app.controller('DemoCtrl', function($http, $location,localStorageService,$interval) {
		var url = 'https://xamarin-api.herokuapp.com/api';
		var interval = $interval(function() {
			chkSorteio();
		}, 3000);
		chkSorteio();
		function chkSorteio(){
			$http({
				method: 'GET',
				url: url+'/raffle',
			}).success(function(data, status ) {
				$location.path('/bolinha');
				$interval.cancel(interval);
			   	//$("#loading").fadeOut(500);		
			   	//$("body").html('<h1>'+data.email+'</h1>');				
				if(localStorageService.email == data.email){
					$location.path('/ganhador');
				}else{
					$location.path('/resultado');
				}

		 	}).error(function(data, status) {
				if (status === 400) {
					// TODO subir erro de e-mail duplicado
				}else{
					// TODO erro da aplicação
				}	
			});
			}
		});
	
})(angular);
