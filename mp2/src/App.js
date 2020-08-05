import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar"
import Search from "./components/Search/Search.jsx"
import Gallery from "./components/Gallery/Gallery"
import Details from './components/Details/Details'

require ('./index.css')

function App() {
  return (
    <Router>
      <div>
          <NavBar />

          <Route exact path="/">
              <Home />
            </Route>
            <switch>
                <Route path="/Search" component={Search}  />
                <Route path="/Gallery" component={Gallery}  />
                <Route path="/Details/:id" component={Details}  />
                {/*<Route component={NotFound} />*/}
            </switch>

          {/* <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Search">
              <Search />
            </Route>
            <Route path="/Gallery">
              <Gallery />
            </Route>
            <Route path="/Details/:id">
              <Details />
            </Route>
          </Switch> */}

      </div>
    </Router>
  );
}

function Home() {
  return(
    <div className="Home">
      <h1>Please click on one of the above 2 buttons</h1>
    </div>
  );
}

export default App;