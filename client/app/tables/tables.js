import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tablesComponent from './tables.component';
import tablesService from './tables.service';
import Table from './table/table.model';
import '../../../node_modules/angular-footballdata-api-factory/src/angular-footballdata-api-factory';
import constants from '../shared/constants';

let tablesModule = angular.module('tables', [
    uiRouter,
    'jtt_footballdata'
])

.config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $stateProvider
        .state('tables', {
            url: '/tables',
            activeTab: 'tables',
            component: 'tables',
            resolve: {
                'allTables': tablesService => tablesService.getAllTablesFromCache()
            }
        });
})

.component('tables', tablesComponent)

.service('tablesService', tablesService)

.service('constants', constants)

.factory('Table', function() {
    return Table;
})

.name;

export default tablesModule;