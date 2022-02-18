import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'; 
import ToDoFeature from './features/ToDo';
import AlbumFeature from './features/Album';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      Homepage
    
      <Switch>
        <Route path="/todos" component={<ToDoFeature />} />
        <Route path="/albums" component={<AlbumFeature />} />
      </Switch>
    </div>
  );
}

export default App;
