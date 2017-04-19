class TablesController {
    constructor(tablesService, $state) {
        this.tablesService = tablesService;
        this.$state = $state;
        this.activeTab = $state.current.activeTab;
        this.name = 'tables';
    }

    $onInit() {
        this.tablesService.getAllTablesFromRequest()
            .then(res => this.checkIfThereIsDifferenceInData(res));
    }

    checkIfThereIsDifferenceInData(res) {
        if (JSON.stringify(res) !== JSON.stringify(this.allTables)) {
            this.allTables = res;
        }
        return this.allTables;
    }
}

export default TablesController;