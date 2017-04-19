import Fixture from '../shared/components/fixture/fixture.model';

class fixtureDetails {
    constructor(res) {
        'ngInject';
        let that = this;
        this.homeTeamName = res.fixture.homeTeamName;
        this.homeTeamGoals = res.fixture.result.goalsHomeTeam;
        this.homeTeamId = res.fixture._links.homeTeam.href.split('/')[5];

        this.awayTeamName = res.fixture.awayTeamName;
        this.awayTeamGoals = res.fixture.result.goalsAwayTeam;
        this.awayTeamId = res.fixture._links.awayTeam.href.split('/')[5];

        this.status = res.fixture.status;
        this.date = res.fixture.date;
        this.id = res.fixture._links.self.href.split('/')[5];

        this.lastFixtures = [];
        res.head2head.fixtures.forEach(function(fix) {
            that.lastFixtures.push(new Fixture(fix));
        });
        this.homeTeamWins = res.head2head.homeTeamWins;
        this.draws = res.head2head.draws;
        this.awayTeamWins = res.head2head.awayTeamWins;

        this.homeTeamOdd = res.fixture.odds ? res.fixture.odds.homeWin : '-';
        this.drawOdd = res.fixture.odds ? res.fixture.odds.draw : '-';
        this.awayTeamOdd = res.fixture.odds ? res.fixture.odds.awayWin : '-';
    }
}

export default fixtureDetails;