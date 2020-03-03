import React from 'react';
import './App.css';
//import NoteCardList from './components/NoteCardList';
import MyFirstGrid from './components/MyFirstGrid';

function App() {
  /*const noteDataArray = [
    {
      heading: 'complete webapp',
      description: 'finish the react-grid webapplication today',
      dataGrid: { x: 0, y: 0, w: 1, h: 2, static: true },
    },
    {
      heading: 'Hygiene',
      description: 'bring hand sanitizers and masks to maintian hygiene',
      dataGrid: { x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    },
    {
      heading: 'visa extension',
      description: 'gets document copies required for visa extension',
      dataGrid: { x: 4, y: 0, w: 1, h: 2 },
    },
  ];*/

  return (
    <div className="container">
      <MyFirstGrid />
    </div>
  );
}

export default App;
