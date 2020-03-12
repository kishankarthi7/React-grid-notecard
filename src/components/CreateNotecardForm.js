import React from 'react';

class CreateNotecardForm extends React.Component {
  onClickHandler = () => {
    this.props.addNoteCard();
  };

  render() {
    return (
      <div className="create-button">
        <button onClick={this.onClickHandler}>Create Notecard</button>
      </div>
    );
  }
}

export default CreateNotecardForm;
