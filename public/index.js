(function(angular) {

	'use strict';
	var app = angular.module('xamarin-app', ['ngRoute', 'LocalStorageModule']);

  app.config(function($routeProvider) {
  	var route = function(url, templateUrl, controller) {
  		$routeProvider.when(url, {
  			templateUrl: templateUrl
  		});
  	};

    route('/', 						'views/sorteio.html');
    route('/sorteio', 		'views/sorteio.html');
    route('/aguardando', 	'views/aguardando.html');
		route('/resultado', 	'views/resultado.html')

		for (var i = 1; i <= 4; i++) {
			route('/ganhador'+i, 'views/ganhador'+i+'.html');
		}

    for (var i = 1; i <= 30; i++) {
      route('/demo'+i, 'views/preload-animations/demo'+i+'.html');
    }

  });

})(angular);
