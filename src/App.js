import React from 'react';
import './App.css';
import AddCard from './components/working/AddCard';
import MainGrid from './components/working/MainGrid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfItems: 0,
      items: [],
    };
  }

  addCard = () => {
    this.addNumberOfItems();
    this.addItems();
  };

  addNumberOfItems = () => {
    this.setState(state => {
      return {
        numberOfItems: state.numberOfItems + 1,
      };
    });
  };

  addItems = () => {
    const valueOfNumberOfItems = this.state.numberOfItems;
    this.setState(prevState => {
      return {
        items: [...prevState.items, [valueOfNumberOfItems]],
      };
    });
  };

  deleteCard = id => {
    this.deleteNumberOfItems(id);
    this.deleteItems(id);
  };

  deleteNumberOfItems = id => {
    this.setState(state => {
      return {
        numberOfItems: state.numberOfItems - 1,
      };
    });
  };

  deleteItems = id => {
    this.setState(prevState => ({
      items: prevState.items.filter(el => el !== id),
    }));
  };

  render() {
    return (
      <div className="App">
        <AddCard addCardMethod={this.addCard} />
        <MainGrid deleteCardMethod={this.deleteCard} items={this.state.items} />
      </div>
    );
  }
}

export default App;
