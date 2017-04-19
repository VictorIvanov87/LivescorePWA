class Team {
    constructor(res) {
        'ngInject';
        this.name = res.name;
        this.logo = res.crestUrl;
        this.players = res._links.players.href;
        this.squadMarketValue = res.squadMarketValue;
    }
}

export default Team;