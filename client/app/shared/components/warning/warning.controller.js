class WarningController {
    constructor() {
        this.name = 'warning';
        this.online = false;
    }
    $onInit() {
        if (navigator.onLine) {
            this.online = true;
        }
    }
}

export default WarningController;