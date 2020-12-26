import styled from 'styled-components';
import PropTypes from 'prop-types';

import {typescale} from 'src/utils/typography';
import {inputText} from 'src/utils/layout';

const InputText = styled.input.attrs(props => ({
  autoComplete: 'off', // to remove Webkit browser's default style that cannot be overriden. See https://stackoverflow.com/questions/2338102/overrideq-browser-form-filling-and-input-highlighting-with-html-css
  type: 'text',
}))`
  ${typescale.large}
  background-color: inherit;
  border-color: currentColor;
  border-style: solid;
  border-width: ${inputText.borderWidth.inactive}px;
  border-radius: 4px;
  color: inherit;
  height: 100%; /* Without this, text moves as the border thickens with focus */
  padding-bottom: ${inputText.paddingBottom - 12}px;
  padding-left: ${inputText.paddingLeft - 2.25}px;
  padding-top: ${inputText.paddingTop + 10}px;
  text-align: left;
  width: 100%;

  &:active,
  &:hover,
  &:focus {
    border-width: ${inputText.borderWidth.active}px;
    outline: none;
    padding-left: ${inputText.paddingLeft -
    3.25}px; /* taking into account the thicker border */
  }
`;

InputText.propTypes = {};

export default InputText;
