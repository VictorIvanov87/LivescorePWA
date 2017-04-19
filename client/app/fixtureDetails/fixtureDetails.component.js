import template from './fixtureDetails.html';
import controller from './fixtureDetails.controller';
import './fixtureDetails.scss';

let fixtureDetailsComponent = {
    restrict: 'E',
    bindings: {
        fixtureDetails: '<'
    },
    template,
    controller
};

export default fixtureDetailsComponent;