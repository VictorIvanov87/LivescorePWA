class constants {
    constructor() {
        'ngInject';
        // this.leagueIds = [440, 426];
        this.leagueIds = [440, 426, 436, 438, 430, 433, 434];
        this.fixtureTitles = [{
            day: 'Last Month',
            key: 'p30'
        }, {
            day: 'Last Week',
            key: 'p7'
        }, {
            day: 'Yesterday',
            key: 'p1'
        }, {
            day: 'Today',
            key: 'n1'
        }, {
            day: 'Next Week',
            key: 'n7'
        }, {
            day: 'Next Month',
            key: 'n30'
        }];
        this.footballApiKey = 'b6cf819dbc3e49009a882b4cf98c4ea6';
        this.newsApiUrl = 'https://newsapi.org/v1/articles?source=bbc-sport&sortsBy=top&apiKey=435b002d1abe4107a588d6fac04d7651';
    }
}

export default constants;