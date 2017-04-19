class FixtureController {
    constructor(fixtureService) {
        this.name = 'fixture';
        this.fixtureService = fixtureService;
    }

    time(fixtureDate) {
        let that = this;
        return that.fixtureService.returnTime(fixtureDate);
    }
}
export default FixtureController;