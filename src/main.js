import React from 'react';
import ReactDom from 'react-dom';
import {BlockShape} from './components/index';
import {
 SVG_WIDTH,
 SVG_HEIGHT,
} from './Constants';

ReactDom.render(<svg
  width={SVG_WIDTH}
  height={SVG_HEIGHT}
  viewBox={[0, 0, SVG_WIDTH, SVG_HEIGHT]}>
  <BlockShape translateX={0} translateY={0} color='orange' shapeType={0} />
  <BlockShape translateX={1} translateY={3} color='slategrey' shapeType={1} />
  <BlockShape translateX={2} translateY={6} color='green' shapeType={2} />
  <BlockShape translateX={3} translateY={9} color='red' shapeType={3} />
</svg>, document.getElementById('app'));
module.hot.accept();