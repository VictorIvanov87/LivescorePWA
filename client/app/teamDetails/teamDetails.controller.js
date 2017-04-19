class TeamDetailsController {
    constructor($window) {
        this.name = 'teamDetails';
        this.$window = $window;
    }

    $onInit() {
        this.$window.scrollTo(0, 0);
    }
}

export default TeamDetailsController;