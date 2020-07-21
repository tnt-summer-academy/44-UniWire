import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import CreateProjectBtn from './components/CreateProjectBtn';
import NavBar from './components/NavBar';
import Tile from './components/Tile';

function App() {
  return (
    <html>
      <body>
        <SearchBar/>
        <CreateProjectBtn/>
        <NavBar/>
        <Tile/>
      </body>
    </html>
  );
}

export default App;
