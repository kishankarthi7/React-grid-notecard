import React from 'react';
import './App.css';
import AddCard from './components/working/AddCard';
import MainGrid from './components/working/MainGrid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfItems: localStorage.getItem('myNumberOfItems') || 0,
      items: JSON.parse(localStorage.getItem('myItems')) || [],
    };
  }

  componentDidMount() {
    console.log(' componentDidMount called');
    localStorage.setItem(
      'myNumberOfItems',
      this.state.numberOfItems.toString(),
    );
    const myNumberOfItemsValue = parseInt(
      localStorage.getItem('myNumberOfItems'),
    );
    console.log(typeof myNumberOfItemsValue);
    console.log('myNumberOfItemsValue', myNumberOfItemsValue);

    localStorage.setItem('myItems', JSON.stringify(this.state.items));
    const myItemsValue = JSON.parse(localStorage.getItem('myItems'));
    console.log(typeof myItemsValue);
    console.log('myItemsValue', myItemsValue);
  }

  addCard = () => {
    console.log(this.state.numberOfItems);
    this.addItems();
    this.addNumberOfItems();

    localStorage.setItem(
      'myNumberOfItems',
      this.state.numberOfItems.toString(),
    );
    const myNumberOfItemsValue = parseInt(
      localStorage.getItem('myNumberOfItems'),
    );
    console.log('myNumberOfItemsValue', myNumberOfItemsValue);

    localStorage.setItem('myItems', JSON.stringify(this.state.items));
    const myItemsValue = JSON.parse(localStorage.getItem('myItems'));
    console.log('myItemsValue', myItemsValue);
  };

  addNumberOfItems = () => {
    const value =
      1 + this.state.numberOfItems === 0 ? 1 : this.state.numberOfItems;

    this.setState(state => {
      return {
        numberOfItems: value,
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
    localStorage.setItem('myname', JSON.stringify(this.state.items));
    const value = JSON.parse(localStorage.getItem('myname'));
    console.log('deleted' + value);
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
