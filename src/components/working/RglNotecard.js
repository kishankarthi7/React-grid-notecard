import React, { useEffect, useState } from 'react';
import AddCard from './AddCard';
import MainGrid from './MainGrid';

function RglNotecard(props) {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const retrievedNumberSaved = JSON.parse(
      localStorage.getItem('numbersaved'),
    );
    const retrievedItems = JSON.parse(localStorage.getItem('itemsaved'));

    if (retrievedNumberSaved != null) {
      setNumberOfItems(retrievedNumberSaved);
    }

    if (retrievedItems != null) {
      setItems([...retrievedItems]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('numbersaved', JSON.stringify(numberOfItems));
    localStorage.setItem('itemsaved', JSON.stringify(items));
  }, [numberOfItems, items]);

  function addCard() {
    addNumberOfItems();
    addItems();
  }

  function addNumberOfItems() {
    setNumberOfItems((prevNumberOfItems) => prevNumberOfItems + 1);
  }

  function addItems() {
    const valueOfNumberOfItems = numberOfItems;
    setItems((prevItems) => [...prevItems, [valueOfNumberOfItems]]);
  }

  function deleteCard(id) {
    deleteNumberOfItems(id);
    deleteItems(id);
  }

  function deleteNumberOfItems(id) {
    setNumberOfItems((prevNumberOfItems) => prevNumberOfItems - 1);
  }

  function deleteItems(id) {
    setItems((prevItems) => prevItems.filter((el) => el !== id));
  }

  return (
    <div className="App">
      <AddCard addCardMethod={addCard} />
      <MainGrid deleteCardMethod={deleteCard} items={items} />
    </div>
  );
}

export default RglNotecard;
