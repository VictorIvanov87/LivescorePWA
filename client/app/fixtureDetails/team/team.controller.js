class TeamController {
    constructor(teamService, Team) {
        'ngInject';
        this.name = 'team';
        this.teamService = teamService;
        this.Team = Team;
    }
    $onInit() {
        let that = this;
        this.teamService.getTeamInfo(this.teamId)
            .then(res => this.team = new that.Team(res));
    }
}

export default TeamController;