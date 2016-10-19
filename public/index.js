(function(angular) {

	'use strict';
	var app = angular.module('xamarin-app', ['ngRoute', 'LocalStorageModule']);

  app.config(function($routeProvider) {
  	var route = function(url, templateUrl, controller) {
  		$routeProvider.when(url, {
  			templateUrl: templateUrl
  		});
  	};

    route('/', 						'view/sorteio.html');
    route('/sorteio', 		'view/sorteio.html');
    route('/aguardando', 	'view/aguardando.html');
		route('/resultado', 	'view/resultado.html')

		for (var i = 1 <= 4) {
			route('/ganhador'+i, 'view/ganhador'+i+'.html');
		}

    for (var i = 1; i <= 30; i++) {
      route('/demo'+i, 'view/preload-animations/demo'+i+'.html');
    }

  });

})(angular);
