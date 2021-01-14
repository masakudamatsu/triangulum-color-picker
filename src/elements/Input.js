import styled from 'styled-components';
import PropTypes from 'prop-types';

import {typescale} from 'src/utils/typography';
import {inputText} from 'src/utils/layout';

const Input = styled.input.attrs(props => ({
  autoComplete: 'off', // to remove Webkit browser's default style that cannot be overriden. See https://stackoverflow.com/questions/2338102/overrideq-browser-form-filling-and-input-highlighting-with-html-css
  type: 'text',
}))`
  background-color: ${props => (props.hex ? props.backgroundColor : `inherit`)};
  border-color: currentColor;
  border-style: solid;
  border-width: ${inputText.borderWidth.inactive}px;
  color: inherit;

  &:active,
  &:hover,
  &:focus {
    border-width: ${inputText.borderWidth.active}px;
    outline: none;
  }

  /* Typography */
  ${props =>
    props.colorCode
      ? typescale.large
      : props.numberLarge
      ? typescale.number
      : typescale.medium}

  /* Case-specific styles */
  ${props =>
    props.colorCode
      ? `
      border-radius: 4px;
      height: 100%; /* Without this, text moves as the border thickens with focus */
      padding-bottom: ${inputText.paddingBottom - 12}px;
      padding-left: ${inputText.paddingLeft - 2.25}px;
      padding-top: ${inputText.paddingTop + 10}px;
      text-align: left;
      width: 100%;
      &:active,
      &:hover,
      &:focus {
        padding-left: ${
          inputText.paddingLeft - 3.25
        }px; /* taking into account the thicker border */
      }
    `
      : null}

  ${props =>
    props.hex
      ? `
      border-radius: 100%;
      height: 100%;
      text-align: center;
      width: 100%;
    `
      : null}

  ${props =>
    props.numberSmall
      ? `
      border-radius: 100%;
      height: 100%;
      padding-top: 8px;
      text-align: center;
      width: 100%;
    `
      : null}

  ${props =>
    props.numberLarge
      ? `
      border: none;
      height: 100px;
      padding-right: 20px;
      text-align: right;
      width: 100%;
    `
      : null}
`;

Input.propTypes = {
  backgroundColor: PropTypes.string,
  colorCode: PropTypes.bool,
  hex: PropTypes.bool,
  numberLarge: PropTypes.bool,
  numberSmall: PropTypes.bool,
};

export default Input;
