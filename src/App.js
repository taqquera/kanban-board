import React, { useState } from 'react';
import './App.css';
import UrlString from './components/UrlString/UrlStrnig';
import DragNDrop from './components/DragNDrop/DragNDrop';

// let api = 'https://github.com/facebook/react/issues' is this link  correct? :)


const data = [
  {title: 'To Do', items: ['1', '2', '3']},
  {title: 'In Progress', items: ['4', '5']},
  {title: 'Done', items: ['6', '7', '8']}
]

function App() {

  return (
    <div className="App">
      <div className='wrapper'><UrlString />
      <DragNDrop data={data} /></div>
      
    </div>
  );
}

export default App;
