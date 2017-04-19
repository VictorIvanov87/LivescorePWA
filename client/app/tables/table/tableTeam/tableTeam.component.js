import template from './tableTeam.html';
import controller from './tableTeam.controller';
import './tableTeam.scss';

let tableTeamComponent = {
    restrict: 'E',
    bindings: {
        team: '<'
    },
    template,
    controller
};

export default tableTeamComponent;