import angular from 'angular';
import Components from './components/components';

let SharedModule = angular.module('app.shared', [
    Components
])

.name;

export default SharedModule;