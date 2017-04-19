import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HomeComponent from './home.component';
import LeagueService from './league/league.service';
import constants from '../shared/constants';

let HomeModule = angular.module('app.home', [
    uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            activeTab: 'home',
            component: 'home',
            resolve: {
                // 'allLeagues': leagueService => leagueService.getAllLeaguesFromCache()
            }
        });
})

.component('home', HomeComponent)

.service('leagueService', LeagueService)

.service('constants', constants)

.name;

export default HomeModule;