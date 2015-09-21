'use strict';

var app = angular.module('cftvc', ['ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', 
	function($urlRouterProvider, $stateProvider, $locationProvider) {
		$urlRouterProvider
			.when('/', '/cftvc/home')
			.otherwise('/cftvc/home');
		$stateProvider
			.state('cftvc', {
				url: '/cftvc/home',
				templateUrl: 'views/features/home.html',
				controller: 'homeCtrl'
			});
		$locationProvider.html5Mode(true);
	}]);