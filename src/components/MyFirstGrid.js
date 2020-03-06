import GridLayout from 'react-grid-layout';
import React from 'react';
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import NoteCard from './NoteCard';
import MapLeaflet from './MapLeaflet';

class MyFirstGrid extends React.Component {
  render() {
    return (
      <GridLayout
        className="layout"
        cols={4}
        rowHeight={30}
        width={1200}
        draggableCancel="input, textarea"
        compactType="horizontal"
      >
        <div
          key="a"
          data-grid={{ x: 0, y: 0, w: 0.9, h: 7.25, isResizable: true }}
        >
          <NoteCard />
        </div>
        <div
          key="b"
          data-grid={{ x: 0, y: 0, w: 0.9, h: 7.25, isResizable: true }}
        >
          <NoteCard />
        </div>

        <div
          key="c"
          data-grid={{ x: 0, y: 0, w: 0.9, h: 7.25, isResizable: true }}
        >
          <MapLeaflet />
        </div>
      </GridLayout>
    );
  }
}

export default MyFirstGrid;
