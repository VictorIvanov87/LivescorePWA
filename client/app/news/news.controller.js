class NewsController {
    constructor(newsService) {
        this.name = 'news';
        this.newsService = newsService;
        this.allNews = [];
    }
    $onInit() {
        this.newsService.getNewsFromRequest().then(res => this.checkIfThereIsDifferenceInData(res));
    }

    checkIfThereIsDifferenceInData(res) {
        if (JSON.stringify(res) !== JSON.stringify(this.allNews)) {
            this.allNews = res;
        }
        return this.allNews;
    }
}

export default NewsController;