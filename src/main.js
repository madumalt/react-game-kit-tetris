import React from 'react';
import ReactDom from 'react-dom';
import {Rectangle} from './components/index';

ReactDom.render(<Rectangle 
  x={10}
  y={10}
  width={300}
  height={300}
/>, document.getElementById('app'));
module.hot.accept();