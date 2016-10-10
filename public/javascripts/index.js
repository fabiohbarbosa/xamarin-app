(function(angular) {

	'use strict';
	var app = angular.module('xamarin-app', ['ngRoute']);

  // criar roda
  app.config(function($routeProvider) {
  	var route = function(url, templateUrl, controller) {
  		$routeProvider.when(url, {
  			templateUrl: templateUrl
  		});
  	};
  	route('/sorteio', 'sorteio.html');
  	route('/aguardando', 'aguardando.html');
  	route('/bolinha', 'bolinha.html');
  	route('/resultado', 'resultado.html');

  });

})(angular);
