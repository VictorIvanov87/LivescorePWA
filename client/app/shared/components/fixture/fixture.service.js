class FixtureService {
    constructor(footballdataFactory, Fixture, constants, $q) {
        'ngInject';
        this.footballdataFactory = footballdataFactory;
        this.Fixture = Fixture;
        this.constants = constants;
        this.apiKey = constants.footballApiKey;
        this.$q = $q;
    }

    getAllFixturesFromCache(timeFrame, leagueCode) {
        let that = this;
        let url = `http://api.football-data.org/v1/fixtures?apiKey=${this.apiKey}&league=${leagueCode}&timeFrame=${timeFrame}`;

        if ('caches' in window) {
            return this.$q(function(resolve, reject) {
                caches.match(url).then(response => {
                    if (response) {
                        response.json().then(res => resolve(res.fixtures.map(fixture => new that.Fixture(fixture))));
                    } else {
                        return that.$q(function(resolve, reject) { resolve([]); });
                    }
                });
            });
        }
    }

    getAllFixturesFromRequest(timeFrame, leagueCode) {
        let that = this;
        return this.footballdataFactory.getFixtures({ timeFrame: timeFrame, league: leagueCode, apiKey: this.apiKey })
            .then(res => res.data.fixtures.map(fixture => new that.Fixture(fixture)));
    }

    getFixture(fixtureId) {
        return this.footballdataFactory.getFixture({ id: fixtureId, apiKey: this.apiKey })
            .then(res => res.data);
    }

    returnTime(fixtureDate) {
        let time = Math.floor((new Date()
            .getTime() - new Date(fixtureDate)
            .getTime()) / 60000);
        if (time < 45) {
            return time + "'";
        } else if (time >= 45 && time <= 60) {
            return "Half-time";
        } else if (time >= 60 && time <= 90) {
            return time - 15 + "'";
        } else if (time >= 90) {
            return '90\' +';
        }
    }

}

export default FixtureService;