class TableController {
    constructor() {
        this.name = 'table';
        this.empty = true;
    }

    $onInit() {
        this.empty = this.table.teams.length > 0 ? false : true;
    }
}

export default TableController;