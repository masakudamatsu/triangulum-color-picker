import React from 'react';
import PropTypes from 'prop-types';

import FormValues from 'src/blocks/FormValues';

const TextFieldForRgb = ({r, g, b}) => {
  return (
    <FormValues>
      <FormValues.Wrapper>
        <FormValues.Label htmlFor="r">R</FormValues.Label>
        <FormValues.InputNumber id="r" value={r} />
      </FormValues.Wrapper>
      <FormValues.Wrapper>
        <FormValues.Label htmlFor="g">G</FormValues.Label>
        <FormValues.InputNumber id="g" value={g} />
      </FormValues.Wrapper>
      <FormValues.Wrapper>
        <FormValues.Label htmlFor="b">B</FormValues.Label>
        <FormValues.InputNumber id="b" value={b} />
      </FormValues.Wrapper>
    </FormValues>
  );
};

TextFieldForRgb.propTypes = {
  r: PropTypes.number,
  g: PropTypes.number,
  b: PropTypes.number,
};

export default TextFieldForRgb;
