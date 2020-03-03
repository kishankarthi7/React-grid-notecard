import React from 'react';

class NoteCard extends React.Component {
  render() {
    const noteCardEntry = this.props;

    return (
      <div className="card-big-shadow">
        <div
          className="card card-just-text"
          data-background="color"
          data-color="orange"
          data-radius="none"
        >
          <div className="content">
            <h6 className="category">Todays Note's</h6>
            <h4 className="title">{noteCardEntry.heading}</h4>
            <p className="description">{noteCardEntry.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteCard;
