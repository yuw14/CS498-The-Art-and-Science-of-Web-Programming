import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'
import PropTypes from 'prop-types';


class SearchHandler extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword: "",
        };
    }
     render(){
         const sortAttributes = [ {text: "popularity",value: "popularity"}, {text: "vote",value: "vote"} ];
         const orders = [ {text: "ASC",value: "ASC"}, {text: "DESC",value: "DESC"} ];
         return(
             <div>
                 <Input icon='search' placeholder='Search By Name' value = {this.keyword} 
                 onChange = { e => {
                    // this.setState({keyword: e.target.value});
                    this.keyword = e.target.value;
                    this.props.changeSearch(this.keyword);}
                    }/>
                <Dropdown placeholder = "Sort By Attribute..." selection options={sortAttributes} 
                onChange = { (e,data) =>{
                    this.props.changeSortAttribute(e,data); }
                }/>
                <Dropdown placeholder = "ASC or DESC" selection options={orders} 
                onChange = { (e,data) =>{
                    this.props.changeSortOrder(e,data); }
                }/>                
             </div>
         )
     }
}


SearchHandler.propTypes = {
    changeSearch:PropTypes.func,
    changeSortAttribute:PropTypes.func,
    changeSortOrder:PropTypes.func,
}

export default SearchHandler;