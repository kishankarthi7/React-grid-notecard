import React from 'react';
import ReactCardFlip from 'react-card-flip';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: false, postTitle: '', postBody: '' };
  }

  handleClick = () => {
    console.log('handleClick is called');
    this.props.deleteCardMethod(this.props.id);
  };

  handleFlickClick = (e) => {
    e.preventDefault();

    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  };

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div>
          <div className=" MyDragHandleClassName">
            <div className="card-header">
              <input
                className="noneDraggable"
                type="text"
                placeholder="Notes"
                value={this.state.postTitle}
                onChange={(event) =>
                  this.setState({ postTitle: event.target.value })
                }
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

          <button onClick={this.handleFlickClick}>Flick</button>
        </div>
        <div>
          <p>Back</p>
          <button onClick={this.handleFlickClick}>Flick</button>
        </div>
      </ReactCardFlip>
    );
  }
}

export default Card;
