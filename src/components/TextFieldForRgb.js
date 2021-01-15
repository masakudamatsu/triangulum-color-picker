import React from 'react';
import PropTypes from 'prop-types';

import FormNumberSmall from 'src/blocks/FormNumberSmall';

const TextFieldForRgb = ({handleChange, r, g, b}) => {
  return (
    <FormNumberSmall>
      <FormNumberSmall.Wrapper>
        <FormNumberSmall.Label htmlFor="r">R</FormNumberSmall.Label>
        <FormNumberSmall.Input id="r" onChange={handleChange.r} value={r} />
      </FormNumberSmall.Wrapper>
      <FormNumberSmall.Wrapper>
        <FormNumberSmall.Label htmlFor="g">G</FormNumberSmall.Label>
        <FormNumberSmall.Input id="g" onChange={handleChange.g} value={g} />
      </FormNumberSmall.Wrapper>
      <FormNumberSmall.Wrapper>
        <FormNumberSmall.Label htmlFor="b">B</FormNumberSmall.Label>
        <FormNumberSmall.Input id="b" onChange={handleChange.b} value={b} />
      </FormNumberSmall.Wrapper>
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
