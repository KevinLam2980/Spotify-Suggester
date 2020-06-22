import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Search from './components/Search';
import UserData from './components/UserData';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Search />
        <UserData />
      </div>
    </Router>
  );
}

export default App;
