import React, { Component } from 'react'
import {API_URL,SEARCH_URL,API_KEY} from "../../config";
import axios from 'axios';
import SearchHandler from './SearchHandler.jsx'
import DisplaySearch from './DisplaySearch'
require('./Search.scss')

class Search extends Component {
    constructor(){
        super();
        this.state = {
             movies:[], 
             keyword: "",
             sortAttribute: "",
             isAscending:false,
            };
        this.changeSearch=this.changeSearch.bind(this);
        this.sortByVote=this.sortByVote.bind(this);
        this.sortByPop=this.sortByPop.bind(this);
        this.changeSortAttribute=this.changeSortAttribute.bind(this);
        this.changeSortOrder = this.changeSortOrder.bind(this);
    }

    changeSearch(keyword){
        this.setState({keyword: keyword});
        let whole_query = "";
        if(keyword!=="") whole_query = `${SEARCH_URL}${API_KEY}&query=${keyword}`;
        else whole_query = `${API_URL}movie/popular${API_KEY}&language=en-US`;

        axios.get(whole_query).then(response => {
            this.setState({movies:response.data.results});
            if(this.state.sortAttribute==="popularity") this.state.movies.sort(this.sortByPop);
            else if(this.state.sortAttribute==="vote") this.state.movies.sort(this.sortByVote);
            this.setState();
        })
        .catch(error => {console.log(error);});
    }

    sortByPop(a,b){
        if(this.state.isAscending){
          return (a.vote_average > b.vote_average) - (a.vote_average < b.vote_average)
        }
        else {
          return (a.vote_average < b.vote_average) - (a.vote_average > b.vote_average)
        }
      }

    sortByVote(a,b){
        if(this.state.isAscending){
            return (a.popularity > b.popularity) - (a.popularity < b.popularity)
        }
        else {
            return (a.popularity < b.popularity) - (a.popularity > b.popularity)
        }
    }

    changeSortAttribute(e,data){
        this.setState({sortAttribute: data.value});
        if(this.state.sortAttribute==="popularity") this.state.movies.sort(this.sortByPop);
        else if(this.state.sortAttribute==="vote") this.state.movies.sort(this.sortByVote);
        this.setState();
    }

    changeSortOrder(e,data){
        if(data.value==="ASC") this.setState({isAscending:true});
        else if(data.value==="DESC") this.setState({isAscending:false});

        if(this.state.sortAttribute === "popularity") this.state.movies.sort(this.sortByPop);
        else if(this.state.sortAttribute==="vote") this.state.movies.sort(this.sortByVote);
        this.setState();
    }

    render(){
        // console.log(this.state.movies)
        return(
            <div className = "Search">
                <SearchHandler
                changeSearch = {this.changeSearch}
                changeSortAttribute = {this.changeSortAttribute}
                changeSortOrder = {this.changeSortOrder}
                />
                <div className = "allContent">
                {this.state.movies.map(movie => (
                    <DisplaySearch {...movie} key={movie.id}/>
                ))}
                </div>

            </div>
        )
    }
}


export default Search