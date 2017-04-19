import template from './news.html';
import controller from './news.controller';
import './news.scss';

let newsComponent = {
    restrict: 'E',
    bindings: {
        allNews: '<'
    },
    template,
    controller
};

export default newsComponent;