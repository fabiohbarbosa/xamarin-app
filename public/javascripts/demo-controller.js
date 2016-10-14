(function(angular) {

	var app = angular.module('xamarin-app');

	app.controller('DemoCtrl', function($http, $location, $interval) {
		var url = 'https://xamarin-api.herokuapp.com/api';
<<<<<<< HEAD
=======

>>>>>>> eecc2b7801c7d3208ce56bd3ce75d078e7b27be2
		var interval = $interval(function() {
			chkSorteio();
		}, 3000);

		chkSorteio();

		function chkSorteio() {
			$http({
				method: 'GET',
				url: url+'/raffle',
			}).success(function(data, status ) {
				$location.path('/bolinha');
<<<<<<< HEAD
				$interval.cancel(interval);
			   	//$("#loading").fadeOut(500);		
			   	//$("body").html('<h1>'+data.email+'</h1>');				
				if(localStorageService.email == data.email){
					$location.path('/ganhador');
				}else{
					$location.path('/resultado');
				}
=======
				$interval.cancel(interval)
			   //	$("#loading").fadeOut(500);
			   	//$("body").html('<h1>'+data.email+'</h1>');

>>>>>>> eecc2b7801c7d3208ce56bd3ce75d078e7b27be2

		 	}).error(function(data, status) {
				if (status === 400) {
					// TODO subir erro de e-mail duplicado
<<<<<<< HEAD
				}else{
					// TODO erro da aplicação
				}	
			});
			}
		});
	
=======
				} else {
					// TODO erro da aplicação
				}
			});
		}
});

>>>>>>> eecc2b7801c7d3208ce56bd3ce75d078e7b27be2
})(angular);
