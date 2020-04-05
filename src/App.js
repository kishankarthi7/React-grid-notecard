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

  componentDidMount() {
    const retrievedNumberSaved = JSON.parse(
      localStorage.getItem('numbersaved'),
    );
    const retrievedItems = JSON.parse(localStorage.getItem('itemsaved'));

    if (retrievedNumberSaved != null) {
      this.setState({
        numberOfItems: retrievedNumberSaved,
      });
    }

    if (retrievedItems != null) {
      this.setState({
        items: [...retrievedItems],
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'numbersaved',
      JSON.stringify(this.state.numberOfItems),
    );

    localStorage.setItem('itemsaved', JSON.stringify(this.state.items));
  }

  addCard = () => {
    this.addItems();
    this.addNumberOfItems();
  };

  addNumberOfItems = () => {
    this.setState((prevState) => {
      return {
        numberOfItems: prevState.numberOfItems + 1,
      };
    });
  };

  addItems = () => {
    this.setState((prevState) => {
      return {
        items: [...prevState.items, [prevState.numberOfItems]],
      };
    });
  };

  deleteCard = (id) => {
    this.deleteNumberOfItems(id);
    this.deleteItems(id);
  };

  deleteNumberOfItems = (id) => {
    this.setState((state) => {
      return {
        numberOfItems: state.numberOfItems - 1,
      };
    });
  };

  deleteItems = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((el) => el !== id),
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
