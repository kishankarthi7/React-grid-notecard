import React from 'react';
import MyResponsiveGrid from './MyResponsiveGrid';

class MainGrid extends React.Component {
  render() {
    return (
      <div className="Main-grid">
        <MyResponsiveGrid
          deleteCardMethod={this.props.deleteCardMethod}
          items={this.props.items}
        />
      </div>
    );
  }
}

export default MainGrid;
