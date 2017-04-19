class LeagueController {
    constructor(fixtureService, $interval) {
        'ngInject';
        this.fixtureService = fixtureService;
        this.name = 'league';
        this.allFixtures = [];
        this.league = {};
        this.timeFrameKey = '';
        this.empty = true;
        this.$interval = $interval;
    }


    $onInit() {
        let that = this;

        this.fixtureService.getAllFixturesFromCache(this.timeFrameKey, this.league.league)
            .then(res => this.allFixtures = res)
            .then(fixturesInLeague => this.checkIfThereIsFixtruesInLeague(fixturesInLeague));
        this.fixtureService.getAllFixturesFromRequest(this.timeFrameKey, this.league.league)
            .then(res => this.checkIfThereIsDifferenceInData(res))
            .then(fixturesInLeague => this.checkIfThereIsFixtruesInLeague(fixturesInLeague));

        this.$interval(function() {
            that.fixtureService.getAllFixturesFromRequest(that.timeFrameKey, that.league.league)
                .then(function(res) {
                    that.checkForGoal(res);
                    that.checkIfThereIsDifferenceInData(res);
                    return res;
                })
                .then(fixturesInLeague => that.checkIfThereIsFixtruesInLeague(fixturesInLeague));
        }, 30000);
    }

    $onChanges(changes) {

        if (changes.timeFrameKey) {
            this.fixtureService.getAllFixturesFromCache(changes.timeFrameKey.currentValue, this.league.league)
                .then(res => this.allFixtures = res)
                .then(fixturesInLeague => this.checkIfThereIsFixtruesInLeague(fixturesInLeague));
            this.fixtureService.getAllFixturesFromRequest(changes.timeFrameKey.currentValue, this.league.league)
                .then(res => this.checkIfThereIsDifferenceInData(res))
                .then(fixturesInLeague => this.checkIfThereIsFixtruesInLeague(fixturesInLeague));
        }
    }

    checkIfThereIsFixtruesInLeague(fixturesInLeague) {
        if (fixturesInLeague.length === 0) {
            this.empty = true;
        } else {
            this.empty = false;
        }
    }

    checkIfThereIsDifferenceInData(res) {
        if (JSON.stringify(res) !== JSON.stringify(this.allFixtures)) {
            this.allFixtures = res;
        }
        return this.allFixtures;
    }

    checkForGoal(newFixtures) {
        let that = this;
        newFixtures.forEach(newFixture => {
            that.allFixtures.forEach(oldFixture => {
                if (newFixture.id === oldFixture.id) {
                    if (newFixture.awayTeamGoals !== oldFixture.awayTeamGoals ||
                        newFixture.homeTeamGoals !== oldFixture.homeTeamGoals) {
                        let title = '';
                        if (newFixture.awayTeamGoals !== oldFixture.awayTeamGoals) {
                            title = `Goal! ${newFixture.awayTeamName} scores!`;
                        }
                        if (newFixture.homeTeamGoals == oldFixture.homeTeamGoals) {
                            title = `Goal! ${newFixture.homeTeamName} scores!`;
                        }
                        let body = `${newFixture.homeTeamName} ${newFixture.homeTeamGoals}:${newFixture.awayTeamGoals} ${newFixture.awayTeamName}`;
                        that.showNotification(title, body);
                    }
                }
            });
        });
    }

    // showNotification(title, body) {
    //     Notification.requestPermission(function(result) {
    //         if (result === 'granted') {
    //             navigator.serviceWorker.ready.then(function(registration) {
    //                 registration.showNotification(title, {
    //                     body: body,
    //                     icon: '../../../icons/LiveScore72.png',
    //                     vibrate: [200, 100, 200],
    //                     tag: 'vibration-sample'
    //                 });
    //             });
    //         }
    //     });
    // }

}

export default LeagueController;