import angular from 'angular';
import uiRouter from 'angular-ui-router';
import NavbarComponent from './navbar.component';

let NavbarModule = angular.module('navbar', [
    uiRouter
])

.component('navbar', NavbarComponent)

.name;

export default NavbarModule;