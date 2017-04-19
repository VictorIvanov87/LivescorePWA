import angular from 'angular';
import uiRouter from 'angular-ui-router';
import teamDetailsComponent from './teamDetails.component';
import teamDetailsService from './teamDetails.service';
import Fixture from '../shared/components/fixture/fixture.model';

let teamDetailsModule = angular.module('teamDetails', [
    uiRouter
])

.config(($stateProvider) => {
    "ngInject";

    $stateProvider
        .state('teamDetails', {
            url: '/team/:id',
            activeTab: 'tables',
            params: {
                id: null
            },
            resolve: {
                'teamDetails': ['$stateParams', 'teamDetailsService',
                    function($stateParams, teamDetailsService) {
                        return teamDetailsService.getTeamDetailsFromRequest($stateParams.id).then(res => res);
                    }
                ],
                'players': ['$stateParams', 'teamDetailsService',
                    function($stateParams, teamDetailsService) {
                        return teamDetailsService.getPlayersFromRequest($stateParams.id).then(res => res);
                    }
                ],
                'fixtures': ['$stateParams', 'teamDetailsService',
                    function($stateParams, teamDetailsService) {
                        return teamDetailsService.getFixturesFromRequest($stateParams.id).then(res => res);
                    }
                ]
            },
            component: 'teamDetails'
        });
})


.component('teamDetails', teamDetailsComponent)

.service('teamDetailsService', teamDetailsService)

.factory('Fixture', function() {
    return Fixture;
})

.name;

export default teamDetailsModule;