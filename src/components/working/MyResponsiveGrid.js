import React from 'react';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import RGL, { WidthProvider } from 'react-grid-layout';
import Card from './Card';

const ReactGridLayout = WidthProvider(RGL);

class MyResponsiveGrid extends React.Component {
  constructor(props) {
    super(props);

    const layout = this.generateLayout(this.props.items);

    this.state = { layout };
  }

  generateLayout = (arr) => {
    return arr.map((item, index) => {
      return {
        i: index.toString(),
        x: index,
        y: Math.floor(index / 3),
        w: 1,
        h: 1,
      };
    });
  };

  static defaultProps = {
    className: 'layout',
    isDraggable: false,
    isResizable: false,
    items: 50,
    cols: 12,
    rowHeight: 100,
    onLayoutChange: function () {},
  };

  generateDOM = () => {
    return this.props.items.map((i) => {
      return (
        <div key={i} className="card">
          <Card
            layout={this.state.layout}
            deleteCardMethod={this.props.deleteCardMethod}
            id={i}
          />
        </div>
      );
    });
  };

  componentDidMount() {
    console.log(' componentDidMount called / MyResponsiveGrid');

    const retrievedLayout = JSON.parse(localStorage.getItem('reactGridLayout'));

    if (retrievedLayout != null) {
      this.setState({
        layout: [...retrievedLayout],
      });
    }
  }

  componentDidUpdate() {
    console.log('componentDidMount called / MyResponsiveGrid');

    localStorage.setItem('reactGridLayout', JSON.stringify(this.state.layout));
  }

  // saveLayoutToLocaleStorage = layout => {
  //   localStorage.setItem('reactGridLayout', JSON.stringify(layout));
  //   console.log('layout saved');
  // };

  // retrieveLayoutFromLocalStorage = () => {
  //   console.log('retrieveLayoutFromLocalStorage called');

  //   const outputValue = JSON.parse(localStorage.getItem('reactGridLayout'));
  //   console.log(JSON.parse(localStorage.getItem('reactGridLayout')));
  //   this.setState({ layout: outputValue });
  //   console.log(outputValue);
  //   return outputValue;
  // };

  onLayoutChange = (layout) => {
    //this.saveLayoutToLocaleStorage(layout);
    this.props.onLayoutChange(layout);
    this.setState({ layout });
  };

  render() {
    // {lg: layout1, md: layout2, ...}

    return (
      <div className="my-responsive-grid">
        <ReactGridLayout
          className="layout"
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={4}
          rowHeight={310}
          width={1200}
          layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
          draggableHandle=".MyDragHandleClassName"
          draggableCancel=".noneDraggable"
        >
          {this.generateDOM()}
        </ReactGridLayout>
      </div>
    );
  }
}

export default MyResponsiveGrid;
