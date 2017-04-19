import TableTeam from './tableTeam/tableTeam.model';

class Table {
    constructor(table) {
        'ngInject';
        this.leagueCaption = table.leagueCaption;
        this.teams = [];
        if (table.standing) {
            table.standing.forEach(team => this.teams.push(new TableTeam(team)));
        }
    }
}

export default Table;