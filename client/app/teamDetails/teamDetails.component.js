import template from './teamDetails.html';
import controller from './teamDetails.controller';
import './teamDetails.scss';

let teamDetailsComponent = {
    restrict: 'E',
    bindings: {
        teamDetails: '<',
        players: '<',
        fixtures: '<'
    },
    template,
    controller
};

export default teamDetailsComponent;