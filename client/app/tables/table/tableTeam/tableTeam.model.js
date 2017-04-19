class TableTeam {
    constructor(team) {
        'ngInject';
        this.name = team.teamName;
        this.logo = team.crestURI;
        this.position = team.position;
        this.id = team._links.team.href.split('/')[5];;
        this.points = team.points;
        this.wins = team.wins;
        this.losses = team.losses;
        this.draws = team.draws;
        this.goalsScored = team.goals;
        this.goalsRecieved = team.goalsAgainst;
        this.goalDifference = team.goalDifference;
        this.playedGames = team.playedGames;
    }
}

export default TableTeam;