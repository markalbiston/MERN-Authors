import React from 'react';
import './App.css';
import {Router, Link} from '@reach/router';
import Main from './views/Main';
import AddAuthor from './views/AddAuthor';
import EditAuthor from './views/EditAuthor';
import Blank from './views/Blank';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <Main path="/authors" />
        <AddAuthor path="/authors/new" />
        <EditAuthor path="/authors/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
