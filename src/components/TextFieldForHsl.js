import React from 'react';
import PropTypes from 'prop-types';

import FormNumberSmall from 'src/blocks/FormNumberSmall';

const TextFieldForHsl = ({handleChange, h, s, l}) => {
  return (
    <FormNumberSmall>
      <FormNumberSmall.Wrapper>
        <FormNumberSmall.Label htmlFor="h">H</FormNumberSmall.Label>
        <FormNumberSmall.Input id="h" onChange={handleChange.h} value={h} />
      </FormNumberSmall.Wrapper>
      <FormNumberSmall.Wrapper>
        <FormNumberSmall.Label htmlFor="s">S</FormNumberSmall.Label>
        <FormNumberSmall.Input id="s" onChange={handleChange.s} value={s} />
      </FormNumberSmall.Wrapper>
      <FormNumberSmall.Wrapper>
        <FormNumberSmall.Label htmlFor="l">L</FormNumberSmall.Label>
        <FormNumberSmall.Input id="l" onChange={handleChange.l} value={l} />
      </FormNumberSmall.Wrapper>
    </FormNumberSmall>
  );
};

TextFieldForHsl.propTypes = {
  handleChange: PropTypes.object,
  h: PropTypes.number,
  s: PropTypes.number,
  l: PropTypes.number,
};

export default TextFieldForHsl;
