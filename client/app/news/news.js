import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newsComponent from './news.component';
import NewsService from './news.service';
import constants from '../shared/constants';

let newsModule = angular.module('news', [
    uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $stateProvider
        .state('news', {
            url: '/news',
            activeTab: 'news',
            component: 'news',
            resolve: {
                'allNews': newsService => newsService.getNewsFromCache()
            }
        });
})

.component('news', newsComponent)

.service('newsService', NewsService)

.service('constants', constants)

.name;

export default newsModule;