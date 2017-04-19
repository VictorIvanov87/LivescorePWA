import template from './tables.html';
import controller from './tables.controller';
import './tables.scss';

let tablesComponent = {
    restrict: 'E',
    bindings: {
        allTables: '<'
    },
    template,
    controller
};

export default tablesComponent;