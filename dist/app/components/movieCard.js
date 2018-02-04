"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ratings_1 = require("./ratings");
const react_router_dom_1 = require("react-router-dom");
const timeList_1 = require("./timeList");
class MovieCard extends React.Component {
    constructor(props) {
        super(props);
    }
    getSmallPosterSrc({ yahooId, posterUrl }) {
        // "https://s.yimg.com/vu/movies/fp/mpost/64/01/6401.jpg"
        // "https://movies.yahoo.com.tw/y/r/w158/vu/movies/fp/mpost/64/01/6401.jpg"
        // "https://movies.yahoo.com.tw/i/o/production/movies/October2017/j5FRcQyIjAdjfmcLqcpf-1000x1429.jpg"
        // "https://movies.yahoo.com.tw/x/r/w158/i/o/production/movies/October2017/j5FRcQyIjAdjfmcLqcpf-1000x1429.jpg"
        if (!posterUrl)
            return "";
        const suffix = posterUrl.split('/').slice(3).join('/');
        const isOldDomain = posterUrl.indexOf('s.yimg.com') !== -1;
        const prefix = yahooId < 6962 && isOldDomain ? 'y' : 'x';
        return `https://movies.yahoo.com.tw/${prefix}/r/w158/${suffix}`;
    }
    render() {
        const { roomTypes, movie, timesStrings } = this.props;
        return (React.createElement("article", { style: { display: 'flex' } },
            React.createElement(react_router_dom_1.Link, { to: `/movie/${movie.yahooId}` },
                React.createElement("img", { className: "cardPoster", src: this.getSmallPosterSrc(movie), alt: "Image not found" })),
            React.createElement("div", { className: "col-xs-12" },
                React.createElement("header", { style: { paddingTop: '.5em' } },
                    React.createElement(react_router_dom_1.Link, { style: { color: 'inherit' }, to: `/movie/${movie.yahooId}` },
                        React.createElement("strong", { style: { display: 'flex', alignItems: 'center', lineHeight: '1em' } },
                            movie.chineseTitle,
                            roomTypes && roomTypes.length > 0 && React.createElement("span", { style: { marginLeft: '.2em' } }, roomTypes.map((roomType, index) => React.createElement("img", { key: index, src: `https://s.yimg.com/f/i/tw/movie/movietime_icon/icon_${roomType}.gif` })))),
                        React.createElement("small", null, movie.englishTitle))),
                React.createElement("div", { className: "resultInfo" },
                    React.createElement("span", null,
                        "\u4E0A\u6620\u65E5:",
                        movie.releaseDate),
                    React.createElement("span", { className: "hidden-xs" },
                        "\u985E\u578B:",
                        movie.types.join('、')),
                    React.createElement("span", null,
                        "\u7247\u9577:",
                        movie.runTime)),
                React.createElement(ratings_1.default, { className: "resultRatings", style: { marginTop: ".3em", marginBottom: ".3em" }, movie: movie }),
                timesStrings && React.createElement(timeList_1.default, { timesStrings: timesStrings }),
                movie.briefSummary && React.createElement("div", { className: "hidden-xs" },
                    React.createElement("p", { className: "resultSummary" },
                        React.createElement("span", { dangerouslySetInnerHTML: { __html: movie.briefSummary } }),
                        React.createElement(react_router_dom_1.Link, { to: `/movie/${movie.yahooId}` }, " \u7E7C\u7E8C\u95B1\u8B80"))))));
    }
    ;
}
exports.default = MovieCard;
//# sourceMappingURL=movieCard.js.map