import React from 'react';
import MyResponsiveGrid from './MyResponsiveGrid';

function MainGrid(props) {
  return (
    <div className="Main-grid">
      <MyResponsiveGrid
        deleteCardMethod={props.deleteCardMethod}
        items={props.items}
      />
    </div>
  );
}

export default MainGrid;
