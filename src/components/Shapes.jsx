import React from 'react';
import {Rectangle} from './Rectangle.jsx';
import {
  GRID_SIZE,
  BORDER_SIZE,
  ShapeDescriptions,
} from '../Constants';

export const BlockShape = ({translateX, translateY, color, shapeType=0}) => {
  const blocks = ShapeDescriptions[shapeType];
  const xtranslation = (translateX*GRID_SIZE)+BORDER_SIZE;
  const ytranslation = (translateY*GRID_SIZE)+BORDER_SIZE;
  return <g transform={`translate(${xtranslation} ${ytranslation}) scale(${GRID_SIZE} ${GRID_SIZE})`} fill={color}>
    {
      blocks.map((xy) => <Rectangle x={xy[0]} y={xy[1]} width={1} height={1} />)
    }
  </g>;
};

export class TetrisPanel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentPiecePos: [1,1],
    }
  }

  render() {

  }

  componentDidMount() {

  }

  movePiece(x, y) {
    this.setState({
      currentPiecePos: [this.state.currentPiecePos[0]+x, this.state.currentPiecePos[1]+y]
    });
  }
}
