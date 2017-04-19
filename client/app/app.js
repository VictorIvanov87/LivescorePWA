import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Shared from './shared/shared';
import Home from './home/home';
import League from './home/league/league';
import fixtureDetails from './fixtureDetails/fixtureDetails';
import news from './news/news';
import Team from './fixtureDetails/team/team';
import Tables from './tables/tables';
import Table from './tables/table/table';
import TableTeam from './tables/table/tableTeam/tableTeam';
import teamDetails from './teamDetails/teamDetails';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
        uiRouter,
        Shared,
        Home,
        League,
        fixtureDetails,
        news,
        Team,
        Tables,
        Table,
        TableTeam,
        teamDetails
    ])
    .config(($locationProvider) => {
        "ngInject";
        // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
        // #how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true)
            .hashPrefix('!');
    })

.component('app', AppComponent);