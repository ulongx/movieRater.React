import * as React from 'react';
import Movie from '../../models/movie';

interface MovieDetailProps {
    movie: Movie
    className?: string
    style?: React.CSSProperties
}

class Ratings extends React.Component<MovieDetailProps, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={this.props.className} style={this.props.style}>
                <div className="ratingWrapper"><span className="imdb logo">IMDb</span>
                    {this.props.movie.imdbID ? <a href={"http://www.imdb.com/title/" + this.props.movie.imdbID}>{this.props.movie.imdbRating ? this.props.movie.imdbRating : 'N/A'}</a>
                        : <span>{this.props.movie.imdbRating ? this.props.movie.imdbRating : 'N/A'}</span>
                    }
                </div>
                <div className="ratingWrapper"><span className="yahoo logo">Y!</span>
                    <a href={"https://movies.yahoo.com.tw/movieinfo_main.html/id=" + this.props.movie.yahooId}>{parseInt(this.props.movie.yahooRating) ? this.props.movie.yahooRating : 'N/A'}</a>
                </div>
                {/* <div className="ratingWrapper hide"><img src="/public/image/rottentomatoes.png" />
                    {this.props.movie.tomatoURL && this.props.movie.tomatoURL !== 'N/A' ? <a href={this.props.movie.tomatoURL}>{this.props.movie.tomatoRating ? this.props.movie.tomatoRating : 'N/A'}</a>
                        : <span>{this.props.movie.tomatoRating ? this.props.movie.tomatoRating : 'N/A'}</span>
                    }
                </div> */}
                <div className="ratingWrapper"><span className="ptt logo">PTT</span>
                    <span className="hint--bottom" aria-label="(好雷/普雷/負雷)">
                        {this.props.movie.goodRateArticles.length}/{this.props.movie.normalRateArticles.length}/{this.props.movie.badRateArticles.length}
                    </span>
                </div>
                    {this.props.children}
            </div>
        );
    };
}

export default Ratings;