

var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME PAGE =================================
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',

        })


        .state('home.list', {
            url: '/list',
            templateUrl: 'home-list.html',

        })


        .state('home.paragraph', {
            url: '/paragraph',
            templateUrl: 'home-paragraph.html',
        })

        // ABOUT PAGE =================================
        .state('about', {
            url: '/about',
            templateUrl: 'about.html'



        })

        // SERVICES PAGE =================================
        .state('services', {
            url: '/services',
            templateUrl: 'services.html'



        });


});


                