import React from 'react';

function AddCard(props) {
  function handleAddCardOnclick() {
    props.addCardMethod();
  }

  return (
    <div className="add-card">
      <button className="button addcard-button" onClick={handleAddCardOnclick}>
        ADD CARD
      </button>
    </div>
  );
}

export default AddCard;
