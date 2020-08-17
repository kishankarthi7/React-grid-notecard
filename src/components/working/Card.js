import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [postTitle, setPostTitle] = useState('');

  function handleClick() {
    console.log('handleClick is called');
    props.deleteCardMethod(props.id);
  }

  function handleFlickClick(e) {
    e.preventDefault();
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div>
        <div className=" MyDragHandleClassName">
          <div className="card-header">
            <input
              className="noneDraggable"
              type="text"
              placeholder="Notes"
              value={postTitle}
              onChange={(event) => setPostTitle(event.target.value)}
            />
          </div>
          <div className="card-content">
            <textarea className="noneDraggable"></textarea>
          </div>
          <div className="card-delete-button">
            <button className="button" onClick={handleClick}>
              DELETE
            </button>
          </div>
        </div>

        <button onClick={handleFlickClick}>Flick</button>
      </div>
      <div>
        <p>Back</p>
        <button onClick={handleFlickClick}>Flick</button>
      </div>
    </ReactCardFlip>
  );
}

export default Card;
