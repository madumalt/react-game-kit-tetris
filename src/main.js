import React from 'react';
import ReactDom from 'react-dom';
import {Rectangle} from './components/index';

ReactDom.render(<Rectangle/>, document.getElementById('app'));
module.hot.accept();