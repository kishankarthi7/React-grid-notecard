import React from 'react';

class AddCard extends React.Component {
  handleAddCardOnclick = () => {
    this.props.addCardMethod();
  };

  render() {
    return (
      <div className="add-card">
        <button
          className="button addcard-button"
          onClick={this.handleAddCardOnclick}
        >
          ADD CARD
        </button>
      </div>
    );
  }
}

export default AddCard;
