import styled from 'styled-components';
import PropTypes from 'prop-types';

import {color} from 'src/utils/color';
import {input} from 'src/utils/designSpecs';
import {typescale} from 'src/utils/typography';

const Input = styled.input.attrs(props => ({
  autoComplete: 'off', // to remove Webkit browser's default style that cannot be overriden. See https://stackoverflow.com/questions/2338102/overrideq-browser-form-filling-and-input-highlighting-with-html-css
  type: 'text',
}))`
  background-color: ${color.input.background};
  border-color: ${color.input.border};
  border-style: solid;
  border-width: ${input.borderWidth.inactive}px;
  color: ${color.font};

  &:active,
  &:hover,
  &:focus {
    border-width: ${input.borderWidth.active}px;
    outline: none;
  }
`;

Input.propTypes = {};

export default Input;
