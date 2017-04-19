import template from './table.html';
import controller from './table.controller';
import './table.scss';

let tableComponent = {
    restrict: 'E',
    bindings: {
        table: '<'
    },
    template,
    controller
};

export default tableComponent;