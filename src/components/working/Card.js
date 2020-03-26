import React from 'react';

class Card extends React.Component {
  state = { postTitle: '', postBody: '' };

  handleClick = () => {
    console.log('handleClick is called');
    this.props.deleteCardMethod(this.props.id);
  };

  render() {
    return (
      <div className="card MyDragHandleClassName">
        <div className="card-header">
          <input
            className="noneDraggable"
            type="text"
            placeholder="Notes"
            value={this.state.postTitle}
            onChange={event => this.setState({ postTitle: event.target.value })}
          />
        </div>
        <div className="card-content">
          <textarea className="noneDraggable"></textarea>
        </div>
        <div className="card-delete-button">
          <button className="button" onClick={this.handleClick}>
            DELETE
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
