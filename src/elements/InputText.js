import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputText = styled.input.attrs(props => ({
  autoComplete: 'off', // to remove Webkit browser's default style that cannot be overriden. See https://stackoverflow.com/questions/2338102/overrideq-browser-form-filling-and-input-highlighting-with-html-css
  type: 'text',
}))`
  background-color: inherit;
  border-color: currentColor;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  color: inherit;
  font-size: 1.5rem;
  height: 100%; /* Without this, 10px will be added up for some reason */
  padding: 35.0937px 10.5342px 11.3609px;
  text-align: left;
  width: 100%;

  &:active,
  &:hover,
  &:focus {
    border-width: 2px;
    outline: none;
  }
`;

InputText.propTypes = {};

export default InputText;
