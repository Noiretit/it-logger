import React, { Fragment, useEffect } from 'react';
import Searchbar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn'

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    //Initializes Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <Searchbar/>
      <div className="container">
        <AddBtn/>
        <Logs/>
      </div>
    </Fragment>
  );
}

export default App;
