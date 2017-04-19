import template from './league.html';
import controller from './league.controller';
import './league.scss';

let leagueComponent = {
    restrict: 'E',
    bindings: {
        league: '<',
        timeFrameKey: '<'
    },
    template,
    controller
};

export default leagueComponent;