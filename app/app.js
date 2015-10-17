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
			})
			.state('detail', {
				url: '/cftvc/detail',
				templateUrl: 'views/features/detail.html',
				controller: 'detailCtrl'
			})
			.state('announcement', {
				url: '/cftvc/announcement',
				templateUrl: 'views/features/announcement.html',
				controller: 'announcementCtrl'
			});
		$locationProvider.html5Mode(true);
	}]);