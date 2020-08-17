import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import RglNotecard from './components/working/RglNotecard';
import GraphPage from './components/working/GraphPage';
import './CSS/graph.css';

function App(props) {
  return (
    <div className="App">
      <Link to="/Notecards" className="nav-link">
        {' '}
        Notecard Page{' '}
      </Link>
      <Link to="/GraphPage" className="nav-link">
        {' '}
        Graph Page{' '}
      </Link>

      <Switch>
        <Route exact path="/Notecards">
          <RglNotecard />
        </Route>
        <Route exact path="/GraphPage">
          <GraphPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
