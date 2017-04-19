import angular from 'angular';
import uiRouter from 'angular-ui-router';
import FixtureComponent from './fixture.component';
import Fixture from './fixture.model';
import FixtureService from './fixture.service';
import '../../../../../node_modules/angular-footballdata-api-factory/dist/angular-footballdata-api-factory';
import constants from '../../constants';

let FixtureModule = angular.module('app.home.fixture', [
    uiRouter,
    'jtt_footballdata'
])

.component('fixture', FixtureComponent)

.factory('Fixture', function() {
    return Fixture;
})

.service('fixtureService', FixtureService)

.service('constants', constants)

.filter('formatdate', function($filter) {
    return function(timestamp) {
        let currentDate = new Date();
        let toFormat = new Date(timestamp);

        if (toFormat.getDate() == currentDate.getDate() && toFormat.getMonth() == currentDate.getMonth() && toFormat.getFullYear() == currentDate.getFullYear()) {
            return 'Today, ' + $filter('date')(toFormat.getTime(), 'H:mm');
        }

        if (toFormat.getDate() == (currentDate.getDate() - 1) && toFormat.getMonth() == currentDate.getMonth() && toFormat.getFullYear() == currentDate.getFullYear()) {
            return 'Yesterday, ' + $filter('date')(toFormat.getTime(), 'H:mm');
        }

        return $filter('date')(toFormat.getTime(), 'd MMM, H:mm');
    };
})

.name;

export default FixtureModule;