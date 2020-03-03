import React from 'react';
import NoteCard from './NoteCard';

class NoteCardList extends React.Component {
  render() {
    const noteDataArray = this.props.noteDataArray;
    return (
      <div>
        {noteDataArray.map(note => (
          <NoteCard {...note} />
        ))}
      </div>
    );
  }
}

export default NoteCardList;
