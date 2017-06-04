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
    getSmallPosterSrc(posterUrl) {
        return posterUrl && posterUrl.replace('mpost', 'mpost3');
    }
    render() {
        const { roomTypes, movie, timesStrings } = this.props;
        return (React.createElement("article", { style: { display: 'flex' } },
            React.createElement(react_router_dom_1.Link, { to: `/movie/${movie.yahooId}` },
                React.createElement("img", { src: this.getSmallPosterSrc(movie.posterUrl) })),
            React.createElement("div", { className: "col-xs-12" },
                React.createElement("header", { style: { paddingTop: '.5em' } },
                    React.createElement(react_router_dom_1.Link, { style: { color: 'inherit' }, to: `/movie/${movie.yahooId}` },
                        React.createElement("strong", { style: { display: 'flex', alignItems: 'center', lineHeight: '1em' } },
                            movie.chineseTitle,
                            roomTypes && roomTypes.length > 0 && React.createElement("span", { style: { marginLeft: '.2em' } }, roomTypes.map(roomType => React.createElement("img", { src: `https://s.yimg.com/f/i/tw/movie/movietime_icon/icon_${roomType}.gif` })))),
                        React.createElement("small", null, movie.englishTitle))),
                React.createElement("div", { className: "resultInfo" },
                    React.createElement("span", null,
                        "\u4E0A\u6620\u65E5:",
                        movie.releaseDate),
                    React.createElement("span", { className: "hidden-xs" },
                        "\u985E\u578B:",
                        movie.type),
                    React.createElement("span", null,
                        "\u7247\u9577:",
                        movie.runTime)),
                React.createElement(ratings_1.default, { className: "resultRatings", style: { marginTop: ".3em", marginBottom: ".3em" }, movie: movie }),
                timesStrings && React.createElement(timeList_1.default, { timesStrings: timesStrings }))));
    }
    ;
}
exports.default = MovieCard;
//# sourceMappingURL=movieCard.js.map