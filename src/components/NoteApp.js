import React from 'react';
import CreateNotecardForm from './CreateNotecardForm';
import NoteCardList from './NoteCardList';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfNotecards: 0,
      notecardDataGridArray: [],
    };
  }

  addNoteCard = () => {
    this.setState(prevState => {
      return {
        notecardDataGridArray: [
          ...prevState.notecardDataGridArray,
          { x: 0, y: 0, w: 0.9, h: 7.25, isResizable: true },
        ],
      };
    });
  };

  render() {
    return (
      <div className="container">
        <CreateNotecardForm addNoteCard={this.addNoteCard} />
        <NoteCardList notecardDataGrids={this.state.notecardDataGridArray} />
      </div>
    );
  }
}

export default NoteApp;
