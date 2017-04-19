import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tableTeamComponent from './tableTeam.component';

let tableTeamModule = angular.module('tableTeam', [
  uiRouter
])

.component('tableTeam', tableTeamComponent)

.name;

export default tableTeamModule;
