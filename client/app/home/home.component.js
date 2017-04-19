import template from './home.html';
import controller from './home.controller';
import './home.scss';

let homeComponent = {
    restrict: 'E',
    bindings: {
        // allLeagues: '<'
    },
    template,
    controller
};

export default homeComponent;