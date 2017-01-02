import React from 'react';
import {Rectangle} from './Rectangle.jsx';
import {
  GRID_SIZE,
  ShapeDescriptions,
} from '../Constants';

export const BlockShape = ({translateX, translateY, color, shapeType=0}) => {
  const blocks = ShapeDescriptions[shapeType];
  return <g transform={`translate(${translateX} ${translateY}) scale(${GRID_SIZE} ${GRID_SIZE})`} fill={color}>
    {
      blocks.map((xy) => <Rectangle x={xy[0]} y={xy[1]} width={1} height={1} />)
    }
  </g>;
};
