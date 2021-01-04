import React from 'react';
import PropTypes from 'prop-types';

import FormValues from 'src/blocks/FormValues';

const TextFieldForRgb = ({handleChange, r, g, b}) => {
  return (
    <FormValues>
      <FormValues.Wrapper>
        <FormValues.Label htmlFor="r">R</FormValues.Label>
        <FormValues.Input
          numberSmall
          id="r"
          onChange={handleChange.r}
          value={r}
        />
      </FormValues.Wrapper>
      <FormValues.Wrapper>
        <FormValues.Label htmlFor="g">G</FormValues.Label>
        <FormValues.Input
          numberSmall
          id="g"
          onChange={handleChange.g}
          value={g}
        />
      </FormValues.Wrapper>
      <FormValues.Wrapper>
        <FormValues.Label htmlFor="b">B</FormValues.Label>
        <FormValues.Input
          numberSmall
          id="b"
          onChange={handleChange.b}
          value={b}
        />
      </FormValues.Wrapper>
    </FormValues>
  );
};

TextFieldForRgb.propTypes = {
  handleChange: PropTypes.object,
  r: PropTypes.number,
  g: PropTypes.number,
  b: PropTypes.number,
};

export default TextFieldForRgb;
