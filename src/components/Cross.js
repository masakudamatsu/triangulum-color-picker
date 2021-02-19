import React from 'react';
import PropTypes from 'prop-types';

import Svg from 'src/blocks/Svg';
import {color} from 'src/utils/specColor';

const Cross = ({large, position}) => {
  const scale = large ? 2 : 1;
  const horizontal = {
    x1: 0,
    x2: 30 * scale,
    y: position === 'topLeft' ? 10 * scale : 20 * scale,
  };
  const vertical = {
    x: position === 'topLeft' ? 10 * scale : 20 * scale,
    y1: 0,
    y2: 30 * scale,
  };
  return (
    <Svg
      data-testid="svg"
      position={position}
      large={large}
      viewBox={`0 0 ${30 * scale} ${30 * scale}`}
    >
      <Svg.Line
        data-testid="horizontal"
        lineColor={color.cross}
        x1={horizontal.x1}
        y1={horizontal.y}
        x2={horizontal.x2}
        y2={horizontal.y}
      />
      <Svg.Line
        data-testid="vertical"
        lineColor={color.cross}
        x1={vertical.x}
        y1={vertical.y1}
        x2={vertical.x}
        y2={vertical.y2}
      />
    </Svg>
  );
};

Cross.propTypes = {
  large: PropTypes.bool,
  position: PropTypes.string,
};

export default Cross;
