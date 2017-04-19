class TablesService {
    constructor(footballdataFactory, Table, constants) {
        'ngInject';
        this.footballdataFactory = footballdataFactory;
        this.Table = Table;
        this.constants = constants;
        this.leagueIds = constants.leagueIds;
        this.apiKey = 'b6cf819dbc3e49009a882b4cf98c4ea6';
    }

    getAllTablesFromCache() {
        let that = this;

        if ('caches' in window) {
            return Promise.all(this.leagueIds.map(leagueId => {
                let url = `http://api.football-data.org/v1/soccerseasons/${leagueId}/leagueTable?apiKey=${this.apiKey}`;
                return caches.match(url).then(response => {
                    if (response) {
                        return response.json().then(res => new that.Table(res));
                    }
                });
            }));
        }
    }

    getAllTablesFromRequest() {
        let that = this;

        return Promise.all(this.leagueIds.map(leagueId => {
            return that.footballdataFactory.getLeagueTableBySeason({ id: leagueId, apiKey: this.apiKey })
                .then(res => new that.Table(res.data));
        }));
    }

}

export default TablesService;