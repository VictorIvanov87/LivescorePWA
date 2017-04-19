import angular from 'angular';
import uiRouter from 'angular-ui-router';
import LeagueComponent from './league.component';
import FixtureService from '../../shared/components/fixture/fixture.service';
import '../../../../node_modules/angular-footballdata-api-factory/src/angular-footballdata-api-factory';
import constants from '../../shared/constants';

let LeagueModule = angular.module('app.home.league', [
    uiRouter,
    'jtt_footballdata'
])

.component('league', LeagueComponent)

.service('fixtureService', FixtureService)

.service('constants', constants)

.name;

export default LeagueModule;