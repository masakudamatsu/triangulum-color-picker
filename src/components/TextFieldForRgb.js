import React from 'react';
import PropTypes from 'prop-types';

import FormNumberSmall from 'src/blocks/FormNumberSmall';

const TextFieldForRgb = ({handleChange, r, g, b}) => {
  return (
    <FormNumberSmall>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.Label htmlFor="r">R</FormNumberSmall.Label>
        <FormNumberSmall.Input id="r" onChange={handleChange.r} value={r} />
      </FormNumberSmall.InnerWrapper>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.Label htmlFor="g">G</FormNumberSmall.Label>
        <FormNumberSmall.Input id="g" onChange={handleChange.g} value={g} />
      </FormNumberSmall.InnerWrapper>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.Label htmlFor="b">B</FormNumberSmall.Label>
        <FormNumberSmall.Input id="b" onChange={handleChange.b} value={b} />
      </FormNumberSmall.InnerWrapper>
    </FormNumberSmall>
  );
};

TextFieldForRgb.propTypes = {
  handleChange: PropTypes.object,
  r: PropTypes.number,
  g: PropTypes.number,
  b: PropTypes.number,
};

export default TextFieldForRgb;
