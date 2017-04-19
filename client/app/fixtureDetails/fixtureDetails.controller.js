class fixtureDetailsController {
    constructor($stateParams, $window) {
        'ngInject';
        this.id = $stateParams.id;
        this.name = 'fixtureDetails';
        this.$window = $window;
    }

    $onInit() {
        this.$window.scrollTo(0, 0);
    }
}

export default fixtureDetailsController;