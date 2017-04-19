class LeagueService {
    constructor(footballdataFactory, constants) {
        'ngInject';
        this.footballdataFactory = footballdataFactory;
        this.constants = constants;
        this.apiKey = constants.footballApiKey;
        this.leagueIds = constants.leagueIds;
    }

    getAllLeaguesFromCache() {
        let that = this;
        if ('caches' in window) {
            return Promise.all(this.leagueIds.map(leagueId => {
                let url = `http://api.football-data.org/v1/soccerseasons/${leagueId}?apiKey=${this.apiKey}`;
                return caches.match(url).then(response => {
                    if (response) {
                        return response.json().then(res => res);
                    } else {
                        return {};
                    }
                });
            }));
        }
    }

    getAllLeaguesFromRequest() {
        let that = this;

        return Promise.all(this.leagueIds.map(leagueId => {
            return that.footballdataFactory.getSeason({ id: leagueId, apiKey: this.apiKey })
                .then(res => res.data);
        }));
    }
}

export default LeagueService;