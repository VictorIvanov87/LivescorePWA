class teamDetailsService {
    constructor(footballdataFactory, Fixture) {
        'ngInject';
        this.footballdataFactory = footballdataFactory;
        this.Fixture = Fixture;
        this.apiKey = 'b6cf819dbc3e49009a882b4cf98c4ea6';
    }

    getTeamDetailsFromRequest(id) {
        let that = this;

        return that.footballdataFactory.getTeam({ id: id, apiKey: this.apiKey })
            .then(res => res.data);
    }

    getPlayersFromRequest(id) {
        let that = this;

        return that.footballdataFactory.getPlayersByTeam({ id: id, apiKey: this.apiKey })
            .then(res => res.data);
    }

    getFixturesFromRequest(id) {
        let that = this;

        return that.footballdataFactory.getFixturesByTeam({ id: id, apiKey: this.apiKey })
            .then(res => res.data.fixtures.map(fixture => new that.Fixture(fixture)));
    }
}

export default teamDetailsService;