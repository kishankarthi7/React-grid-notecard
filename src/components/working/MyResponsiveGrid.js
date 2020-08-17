import React, { useEffect, useState } from 'react';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import RGL, { WidthProvider } from 'react-grid-layout';
import Card from './Card';

const ReactGridLayout = WidthProvider(RGL);

function MyResponsiveGrid(props) {
  const givenlayout = generateLayout(props.items);

  const [layout, setLayout] = useState(givenlayout);

  function generateLayout(arr) {
    return arr.map((item, index) => {
      return {
        i: index.toString(),
        x: index,
        y: Math.floor(index / 3),
        w: 1,
        h: 1,
      };
    });
  }

  /*
  
  <Card
            layout={layout}
            deleteCardMethod={props.deleteCardMethod}
            id={i}
          />

          <LineGraph
            style={{ width: '100%', height: '95%' }}
            layout={layout}
            deleteCardMethod={props.deleteCardMethod}
            id={i}
          />

  */

  function generateDOM() {
    return props.items.map((i) => {
      return (
        <div key={i} className="card">
          <Card
            layout={layout}
            deleteCardMethod={props.deleteCardMethod}
            id={i}
          />
        </div>
      );
    });
  }

  useEffect(() => {
    console.log(' componentDidMount called / MyResponsiveGrid');

    const retrievedLayout = JSON.parse(localStorage.getItem('reactGridLayout'));

    if (retrievedLayout != null) {
      setLayout([...retrievedLayout]);
    }
  }, []);

  useEffect(() => {
    console.log('componentDidMount called / MyResponsiveGrid');

    localStorage.setItem('reactGridLayout', JSON.stringify(layout));
  }, [layout]);

  function onLayoutChange(layout) {
    props.onLayoutChange(layout);
    setLayout(layout);
  }

  return (
    <div className="my-responsive-grid">
      <ReactGridLayout
        className="layout"
        breakpoints={{
          lg: 1200,
          md: 996,
          sm: 768,
          xs: 480,
          xxs: 0,
        }}
        cols={4}
        rowHeight={310}
        width={1200}
        layout={layout}
        onLayoutChange={onLayoutChange}
        draggableHandle=".MyDragHandleClassName"
        draggableCancel=".noneDraggable"
      >
        {generateDOM()}
      </ReactGridLayout>
    </div>
  );
}

MyResponsiveGrid.defaultProps = {
  className: 'layout',
  isDraggable: false,
  isResizable: false,
  items: 50,
  cols: 12,
  rowHeight: 100,
  onLayoutChange: function () {},
};

export default MyResponsiveGrid;
