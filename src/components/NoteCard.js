import React from 'react';

class NoteCard extends React.Component {
  state = { postTitle: '', postBody: '' };

  render() {
    return (
      <div className="note-card">
        <div className="note-header">
          <input
            type="text"
            placeholder="Post the Note"
            value={this.state.postTitle}
            onChange={event => this.setState({ postTitle: event.target.value })}
          />
        </div>

        <div className="field">
          <textarea className="note-content" placeholder="Note to self...">
            {this.state.postBody}
          </textarea>
        </div>
      </div>
    );
  }
}
export default NoteCard;
