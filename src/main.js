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
  <BlockShape translateX={10} translateY={10} color='orange' shapeType={0} />
  <BlockShape translateX={60} translateY={60} color='slategrey' shapeType={1} />
  <BlockShape translateX={120} translateY={65} color='slategrey' shapeType={2} />
  <BlockShape translateX={60} translateY={120} color='slategrey' shapeType={3} />
</svg>, document.getElementById('app'));
module.hot.accept();