import React from 'react';
import PropTypes from 'prop-types';

import Svg from 'src/blocks/Svg';
import {color} from 'src/utils/color';

const CrossBottomRight = () => {
  return (
    <Svg bottomRight viewBox="0 0 30 30">
      <Svg.Line lineColor={color.white} x1="0" y1="20" x2="30" y2="20" />
      <Svg.Line lineColor={color.white} x1="20" y1="0" x2="20" y2="30" />
    </Svg>
  );
};

CrossBottomRight.propTypes = {};

export default CrossBottomRight;
