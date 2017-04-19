import angular from 'angular';
import uiRouter from 'angular-ui-router';
import warningComponent from './warning.component';

let warningModule = angular.module('warning', [
  uiRouter
])

.component('warning', warningComponent)

.name;

export default warningModule;
