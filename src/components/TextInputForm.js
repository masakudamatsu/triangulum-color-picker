import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Form = styled.form`
  background-color: inherit;
  height: 81px;
  position: relative;
  width: 303px;
`;

export const Label = styled.label`
  color: inherit;
  font-size: 1rem;
  position: absolute;
  top: 15.5342px;
  left: 12.5342px;
  &::before {
    margin-bottom: -6.12px;
  }
  &::after {
    margin-top: -6.563px;
  }
`;

export const InputText = styled.input.attrs(props => ({
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

const TextInputForm = ({inputId, labelText, setUserColor, userColor}) => {
  function handleChange(event) {
    setUserColor(event.target.value); // Trigger the updating of the parent component
  }

  return (
    <Form>
      <Label htmlFor={inputId}>{labelText}</Label>
      <InputText id={inputId} onChange={handleChange} value={userColor} />
    </Form>
  );
};

TextInputForm.propTypes = {
  inputId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  setUserColor: PropTypes.func,
  userColor: PropTypes.string,
};

export default TextInputForm;

// This code snippet is adapted from https://github.com/kentcdodds/react-hooks/blob/main/src/final/02.extra-3.js
