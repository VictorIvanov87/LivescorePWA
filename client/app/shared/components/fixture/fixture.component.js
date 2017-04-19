import template from './fixture.html';
import controller from './fixture.controller';
import './fixture.scss';

let fixtureComponent = {
    restrict: 'E',
    bindings: {
        fixture: '<'
    },
    template,
    controller
};

export default fixtureComponent;