import React from 'react';
import CreateNotecardForm from './CreateNotecardForm';
import NoteCardList from './NoteCardList';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfNotecards: 0,
    };
  }

  addNoteCard = () => {
    this.setState(state => {
      return { numberOfNotecards: state.numberOfNotecards + 1 };
    });
  };

  render() {
    return (
      <div className="container">
        <CreateNotecardForm addNoteCard={this.addNoteCard} />
        <NoteCardList numberOfNotecards={this.state.numberOfNotecards} />
      </div>
    );
  }
}

export default NoteApp;