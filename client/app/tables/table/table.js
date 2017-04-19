import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tableComponent from './table.component';

let tableModule = angular.module('table', [
    uiRouter
])

.component('table', tableComponent)

.name;

export default tableModule;