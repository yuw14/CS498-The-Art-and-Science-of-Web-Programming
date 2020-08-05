import React, { Component } from 'react'
// import {IMAGE_BASE_URL,POSTER_SIZE} from "../../config";
import {API_URL,API_KEY} from "../../config";
import axios from 'axios';
import { Button } from 'semantic-ui-react'
import DisPlaySearch from '../Search/DisplaySearch';
require('./Gallery.scss')


class Gallery extends Component{
    constructor(props){
        super(props);
        this.state= {
            movies:[]
        }
        // this.filter = this.filter.bind(this);
        // this.genres = { Action: 28, Adventure: 12, Animation: 16, Comedy: 35, Crime: 80, Documentary: 99, Drama: 18, 
        //     Fantasy: 14, History: 36, Thriller:53}  
    }
    genres = { Action: 28, Adventure: 12, Animation: 16, Comedy: 35, Crime: 80, Documentary: 99, Drama: 18, 
        Fantasy: 14, History: 36, Thriller:53} ;
    // genres = [ "Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", 
    //     "Fantasy", "History", "Thriller"]

    componentDidMount(){
        axios.get(`${API_URL}movie/popular${API_KEY}`).then(response=> {
            this.setState({movies: response.data.results})
        })
    }
    componentDidUpdate(){

    }
    filter(e,genre) {
        let keyword = this.genres[genre];
        axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${keyword}&api_key=ea59cae502430892684e13eb5d95b4cf`

        ).then (response => {
            this.setState({movies: response.data.results})
        })
    }
    render() {
        // let genres = { Action: 28, Adventure: 12, Animation: 16, Comedy: 35, Crime: 80, Documentary: 99, Drama: 18, 
        //         Fantasy: 14, History: 36, Thriller:53}  
        return (
        <div className = "outsideContainer">
        <div className = "bar">
            {Object.keys(this.genres).map(genre => (
                <Button onClick = {(e) => this.filter(e,genre)}>
                    {genre}
                </Button>
            ))}
            {/* {this.genres.map(genre => (
                <Button onClick = {e => this.filter(e,genre)}>
                    {genre}
                </Button>
            ))}             */}
        </div>

        <div className = "content">
            {this.state.movies.map(movie => ( <DisPlaySearch {...movie} key={movie.id} />))}
        </div>
        </div>
        )
    };
}

export default Gallery