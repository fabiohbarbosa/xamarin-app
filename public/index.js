(function(angular) {

	'use strict';
	var app = angular.module('xamarin-app', ['ngRoute']);

  app.config(function($routeProvider) {
  	var route = function(url, templateUrl, controller) {
  		$routeProvider.when(url, {
  			templateUrl: templateUrl
  		});
  	};

    route('/', 'sorteio.html');
    route('/sorteio', 'sorteio.html');
    route('/aguardando', 'aguardando.html');
    route('/bolinha', 'bolinha.html');
    route('/resultado', 'resultado.html');


    for (var i = 1; i <= 30; i++) {
      route('/demo'+i, 'preload-animations/demo'+i+'.html');  
    }

  });

})(angular);
