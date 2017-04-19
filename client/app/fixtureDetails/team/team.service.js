class TeamService {
    constructor(footballdataFactory) {
        'ngInject';
        this.footballdataFactory = footballdataFactory;
    }

    getTeamInfo(teamId) {
        return this.footballdataFactory.getTeam({ id: teamId, apiKey: 'b6cf819dbc3e49009a882b4cf98c4ea6' })
            .then(res => res.data);
    }
}

export default TeamService;