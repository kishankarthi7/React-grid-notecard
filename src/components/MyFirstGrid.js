import GridLayout from 'react-grid-layout';
import React from 'react';
import '../../node_modules/react-grid-layout';
import '../../node_modules/react-resizable';
import NoteCard from './NoteCard';

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
          data-grid={{ x: 0, y: 0, w: 0.9, h: 7.25, isResizable: false }}
        >
          <NoteCard />
        </div>
        <div
          key="b"
          data-grid={{ x: 0, y: 0, w: 0.9, h: 7.25, isResizable: false }}
        >
          <NoteCard />
        </div>
        <div
          key="c"
          data-grid={{ x: 0, y: 0, w: 0.9, h: 7.25, isResizable: false }}
        >
          <NoteCard />
        </div>
      </GridLayout>
    );
  }
}

export default MyFirstGrid;
