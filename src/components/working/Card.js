import React from 'react';

class Card extends React.Component {
  state = { postTitle: '', postBody: '' };

  handleClick = () => {
    this.props.deleteCardMethod(this.props.id);
  };

  render() {
    return (
      <div className="note-card" data-grid={this.props.datagrid}>
        <div className="note-header">
          <h3>Notes</h3>
          <input
            type="text"
            placeholder="Post the Note"
            value={this.state.postTitle}
            onChange={event => this.setState({ postTitle: event.target.value })}
          />
        </div>

        <div className="field">
          <textarea
            rows="6"
            className="note-content"
            placeholder="Note to self..."
          ></textarea>
        </div>
        <button className="button" onClick={this.handleClick}>
          DELETE
        </button>
      </div>
    );
  }
}

export default Card;
