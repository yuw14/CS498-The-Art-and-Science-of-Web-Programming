import React, { Component } from 'react';
import {
    Link,
    withRouter,
  } from "react-router-dom";

require('./NavBar.scss');

class NavBar extends Component{
    // constructor(props){
    //     super(props);
    // }
    //click button, another page
    //https://stackoverflow.com/questions/44877821/how-to-navigate-on-path-by-button-click-in-react-router-v4
    nextPath(path){
        this.props.history.push(path);
    }
    render(){
        return(
            <div>
               <div className='header'>
                   <Link to="/">
                   <div className='title'>
                       <h1>Enjoy the Movie</h1>
                   </div>
                   </Link>
                    <div className='buttons'>
                        <button onClick={()=>this.nextPath('/Search')}>
                            Search Movies
                        </button>
                        <button onClick={()=>this.nextPath('/Gallery')}>
                            Gallery
                        </button>
                    </div>
                </div> 
            </div>
        );
    }
}

export default withRouter(NavBar)
