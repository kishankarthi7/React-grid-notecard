import React from 'react';

class GridLayoutItems extends React.Component {
  render() {
    const gridItemAttributesKey = this.props.key;
    const gridItemAttributesDataGrid = this.props.dataGrid;
    return (
      <div key={gridItemAttributesKey} data-grid={gridItemAttributesDataGrid}>
        <h1>{gridItemAttributesKey}</h1>
      </div>
    );
  }
}

export default GridLayoutItems;
