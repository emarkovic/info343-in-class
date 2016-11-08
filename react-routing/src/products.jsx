import React from "react";

//polyfill for the fetch() API so that we can use
//it in Safari and older browsers
//this module was already included in our package.json
//so after you execute `npm install` this module will
//be in the node_modules directory, so we can load it
//simply by importing it's module name
import "whatwg-fetch";

import Movie from './Movie.jsx';

const APIKEY = "0b5e00af262abbae8aebb38333034029";
const BASE_URL = "https://api.themoviedb.org/3"
const DISCOVER_API = BASE_URL + "/discover/movie?api_key=" + APIKEY;
const GENRES_API = BASE_URL + "/genre/movie/list?api_key=" + APIKEY;

export default class extends React.Component {
    constructor(props) {
        super(props);
        
        //initialize the component state to an empty object
        this.state = {}
    }

    componentDidMount() {
        fetch(DISCOVER_API)
            .then(response => response.json())
            .then(data => {this.setState({movies: data})});
    }

    render() {
        var totalPages;
        var movies;
        if (this.state.movies) {
            totalPages = <p>{this.state.movies.total_pages} pages</p>;
            movies = [];            
            movies = this.state.movies.results.map(m => <Movie key={m.id} movie={m} />)
        }
        return (
            <div className="container">
                <h1>Products View</h1>
                <p>some nifty products for sale</p>
                {totalPages}  
                {movies}              
            </div>            
        );
    }
}