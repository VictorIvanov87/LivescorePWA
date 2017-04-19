class HomeController {
    constructor(leagueService, constants, $state) {
        this.name = 'home';
        this.leagueService = leagueService;
        this.$state = $state;
        this.activeTab = $state.current.activeTab;
        this.constants = constants;
        this.allLeagues = [];
        this.fixtureTitles = constants.fixtureTitles;
        this.previousFixturesTitle = this.fixtureTitles[2].day;
        this.currentFixturesTitle = this.fixtureTitles[3].day;
        this.nextFixturesTitle = this.fixtureTitles[4].day;
        this.timeFrameKey = this.fixtureTitles[3].key;
        this.hideLeftArrow = false;
        this.hideRightArrow = false;

        this.seeNextFixtures = () => {
            let currentDay = this.fixtureTitles.findIndex(x => x.day == this.currentFixturesTitle);
            if (currentDay !== this.fixtureTitles.length - 1) {
                this.previousFixturesTitle = this.fixtureTitles[currentDay].day;
                this.currentFixturesTitle = this.fixtureTitles[currentDay + 1].day;
                if (currentDay !== this.fixtureTitles.length - 2) {
                    this.nextFixturesTitle = this.fixtureTitles[currentDay + 2].day;
                }
                this.hideLeftArrow = false;
            }
            if (currentDay === this.fixtureTitles.length - 2) {
                this.hideRightArrow = true;
            }
            this.timeFrameKey = this.fixtureTitles[currentDay + 1].key;
        };

        this.seePreviousFixtures = () => {
            let currentDay = this.fixtureTitles.findIndex(x => x.day == this.currentFixturesTitle);
            if (currentDay > 0) {
                if (currentDay > 1) {
                    this.previousFixturesTitle = this.fixtureTitles[currentDay - 2].day;
                }
                this.currentFixturesTitle = this.fixtureTitles[currentDay - 1].day;
                this.nextFixturesTitle = this.fixtureTitles[currentDay].day;
                this.hideRightArrow = false;
            }
            if (currentDay === 1) {
                this.hideLeftArrow = true;
            }
            this.timeFrameKey = this.fixtureTitles[currentDay - 1].key;
        };
    }

    $onInit() {
        this.leagueService.getAllLeaguesFromCache()
            .then(res => {
                this.checkIfThereIsDifferenceInData(res);
            });
        this.leagueService.getAllLeaguesFromRequest()
            .then(res => {
                this.checkIfThereIsDifferenceInData(res);
            });
    }

    checkIfThereIsDifferenceInData(res) {
        if (JSON.stringify(res) !== JSON.stringify(this.allLeagues)) {
            this.allLeagues = res;
        }
        return this.allLeagues;
    }

}

export default HomeController;