class NewsService {
    constructor($http, constants) {
        'ngInject';
        this.$http = $http;
        this.constants = constants;
        this.url = constants.newsApiUrl;
    }

    getNewsFromCache() {
        if ('caches' in window) {
            return caches.match(this.url).then(response => {
                if (response) {
                    return response.json().then(res => res.articles);
                }
            });
        }
    }

    getNewsFromRequest() {
        return this.$http.get(this.url)
            .then(res => res.data.articles);
    }
}

export default NewsService;