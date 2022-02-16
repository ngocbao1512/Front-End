import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'; 
import ToDoFeature from './features/ToDo/index';
import AlbumFeature from './features/Album/index';

function App() {

  return (
    <div className="App">
      <ToDoFeature />
    </div>
  );
}

export default App;
