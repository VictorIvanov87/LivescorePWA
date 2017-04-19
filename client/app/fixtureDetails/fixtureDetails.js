import angular from 'angular';
import uiRouter from 'angular-ui-router';
import fixtureDetailsComponent from './fixtureDetails.component';
import FixtureService from '../shared/components/fixture/fixture.service';
import FixtureDetails from './fixtureDetails.model';

let fixtureDetailsModule = angular.module('fixtureDetails', [
    uiRouter
])

.config(($stateProvider) => {
    "ngInject";

    $stateProvider
        .state('fixtureDetails', {
            url: '/fixture/:id',
            activeTab: 'home',
            params: {
                id: null
            },
            resolve: {
                'fixtureDetails': ['$stateParams', 'FixtureService',
                    function($stateParams, FixtureService) {
                        return FixtureService.getFixture($stateParams.id).then(res => new FixtureDetails(res));
                    }
                ]
            },
            component: 'fixtureDetails'
        });
})

.component('fixtureDetails', fixtureDetailsComponent)

.service('FixtureService', FixtureService)


.name;

export default fixtureDetailsModule;