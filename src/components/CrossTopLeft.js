import React from 'react';
import PropTypes from 'prop-types';

import Svg from 'src/blocks/Svg';
import {color} from 'src/utils/color';

const CrossTopLeft = () => {
  return (
    <Svg topLeft viewBox="0 0 30 30">
      <Svg.Line lineColor={color.white} x1="0" y1="10" x2="30" y2="10" />
      <Svg.Line lineColor={color.white} x1="10" y1="0" x2="10" y2="30" />
    </Svg>
  );
};

CrossTopLeft.propTypes = {};

export default CrossTopLeft;
