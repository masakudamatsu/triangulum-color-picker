import styled from 'styled-components';
import PropTypes from 'prop-types';

import {typescale} from 'src/utils/typography';
import {inputText} from 'src/utils/layout';

const InputNumber = styled.input.attrs(props => ({
  autoComplete: 'off', // to remove Webkit browser's default style that cannot be overriden. See https://stackoverflow.com/questions/2338102/overrideq-browser-form-filling-and-input-highlighting-with-html-css
  type: 'text',
}))`
  ${typescale.medium}
  background-color: inherit;
  border-color: currentColor;
  border-style: solid;
  border-width: ${inputText.borderWidth.inactive}px;
  border-radius: 100%;
  color: inherit;
  height: 50px;
  padding-top: 8px;
  text-align: center;
  width: 50px;

  &:active,
  &:hover,
  &:focus {
    border-width: ${inputText.borderWidth.active}px;
    outline: none;
  }
`;

InputNumber.propTypes = {};

export default InputNumber;
