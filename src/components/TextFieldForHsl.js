import React from 'react';
import PropTypes from 'prop-types';

import FormValues from 'src/blocks/FormValues';

const TextFieldForHsl = ({handleChange, h, s, l}) => {
  return (
    <FormValues>
      <FormValues.Wrapper>
        <FormValues.Label htmlFor="h">H</FormValues.Label>
        <FormValues.InputNumber id="h" onChange={handleChange.h} value={h} />
      </FormValues.Wrapper>
      <FormValues.Wrapper>
        <FormValues.Label htmlFor="s">S</FormValues.Label>
        <FormValues.InputNumber id="s" onChange={handleChange.s} value={s} />
      </FormValues.Wrapper>
      <FormValues.Wrapper>
        <FormValues.Label htmlFor="l">L</FormValues.Label>
        <FormValues.InputNumber id="l" onChange={handleChange.l} value={l} />
      </FormValues.Wrapper>
    </FormValues>
  );
};

TextFieldForHsl.propTypes = {
  handleChange: PropTypes.object,
  h: PropTypes.number,
  s: PropTypes.number,
  l: PropTypes.number,
};

export default TextFieldForHsl;
