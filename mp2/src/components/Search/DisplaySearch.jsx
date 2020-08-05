import React, { Component } from 'react'
import {IMAGE_BASE_URL,POSTER_SIZE} from "../../config";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
// import {API_URL,API_KEY} from "../../config";
require('./DisplaySearch.scss')

class DisPlaySearch extends Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        // if(this.props.movies ==  null) return;
        return (
            <div className = "movieCard">
                <Link to={{
                    pathname: `/Details/${this.props.id}`,
                    state:{
                        id: `${this.props.id}`
                    }
                }
                }>
                <div>
                <img style={{ height: '85%', width: '100%' }} src={`${IMAGE_BASE_URL}${POSTER_SIZE}${this.props.poster_path}` } alt='movie poster'></img> 
                </div>                   
                </Link>
            </div>
        );
    }
}

DisPlaySearch.propTypes = {
    id:PropTypes.number,
    poster_path:PropTypes.string
};

export default DisPlaySearch