import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {IMAGE_BASE_URL} from "../../config";
import {API_URL,API_KEY} from "../../config";
import { Button} from 'semantic-ui-react'
require('./Details.scss')


class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie:[]
            // id: useParams()
        };
    }

    componentDidMount() {
        //location is the link address
        axios.get(`${API_URL}movie/${this.props.location.state.id}${API_KEY}`).then(response=>{
            this.setState({movie: response.data});
        });
    }

    componentDidUpdate() {
        axios.get(`${API_URL}movie/${this.props.location.state.id}${API_KEY}`).then(response=>{
            this.setState({movie: response.data});
        });       
    }

    render(){
        const prevID= this.state.movie.id-1;
        const nextID = this.state.movie.id+1;
        return (
            <div className="detailContainer">
                <div>
                <Link to = {
                    {
                    pathname: `/Details/${prevID}`,
                    state: {id: prevID}
                }}>
                <Button basic color='gray' content='Last' icon='chevron left' labelPosition='left'/>
                </Link>
                </div>

                <div className = "detailCenter">
                    <img src = {`${IMAGE_BASE_URL}w342${this.state.movie.poster_path}`} alt='movie poster'/>
                    <h1>{this.state.movie.title}</h1>
                    <h2>vote:{this.state.movie.vote_average}</h2>
                    <p>{this.state.movie.overview}</p>
                </div>

                <div>
                <Link to = {{
                    pathname: `/Details/${nextID}`,
                    state: {id:nextID}
                }}>
                <Button basic color='gray' content='Next' icon='chevron right' labelPosition='right'/>
                </Link>
                </div>
            </div>
        );
    }
}

export default Details;