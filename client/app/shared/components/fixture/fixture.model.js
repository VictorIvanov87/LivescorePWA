class Fixture {
    constructor(fixture) {
        'ngInject';
        this.homeTeamName = fixture.homeTeamName;
        this.homeTeamGoals = fixture.result.goalsHomeTeam;
        this.homeTeamId = fixture._links.homeTeam.href.split('/')[5];
        this.awayTeamName = fixture.awayTeamName;
        this.awayTeamGoals = fixture.result.goalsAwayTeam;
        this.awayTeamId = fixture._links.awayTeam.href.split('/')[5];
        this.status = fixture.status;
        this.date = fixture.date;
        this.link = fixture._links.self.href;
        this.id = fixture._links.self.href.split('/')[5];
    }
}

export default Fixture;