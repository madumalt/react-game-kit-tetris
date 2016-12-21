import React from 'react';

export const Rectangle = ({x, y, width, height}) => {
  return <svg
    width={width}
    height={height}
    viewBox={[0, 0, width, height]}
  >
    <rect x={x} y={y} width={width} height={height}/>
  </svg>;
};