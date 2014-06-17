// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.daily', {
      url: '/daily',
      views: {
        'tab-daily': {
          templateUrl: 'templates/tab-daily.html',
          controller: 'DailyCtrl'
        }
      }
    })

    .state('tab.whenever', {
      url: '/whenever',
      views: {
        'tab-whenever': {
          templateUrl: 'templates/tab-whenever.html',
          controller: 'WheneverCtrl'
        }
      }
    })

    .state('tab.reflect', {
      url: '/reflect',
      views: {
        'tab-reflect': {
          templateUrl: 'templates/tab-reflect.html',
          controller: 'ReflectCtrl'
        }
      }
    })
    .state('tab.entry-detail', {
      url: '/reflect/:entryId',
      views: {
        'tab-reflect': {
          templateUrl: 'templates/entry-detail.html',
          controller: 'EntryDetailCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/daily');

})

.run(CTS.Util.Ionic.ionicAppStartup);
