import React from 'react';

class NoteCardList extends React.Component {
  render() {
    return <h3>{this.props.numberOfNotecards}</h3>;
  }
}

export default NoteCardList;
