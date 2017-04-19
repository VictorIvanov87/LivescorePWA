import angular from 'angular';
import uiRouter from 'angular-ui-router';
import teamComponent from './team.component';
import TeamService from './team.service';
import Team from './team.model';
// import '../../../../../../node_modules/angular-footballdata-api-factory/dist/angular-footballdata-api-factory';

let teamModule = angular.module('app.home.fixture.team', [
    uiRouter,
    'jtt_footballdata'
])

.component('team', teamComponent)

.service('teamService', TeamService)

.factory('Team', function() {
    return Team;
})

.name;

export default teamModule;