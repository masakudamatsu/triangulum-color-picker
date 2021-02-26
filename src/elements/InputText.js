import styled from 'styled-components';
import PropTypes from 'prop-types';

import {color} from 'src/utils/specColor';
import {input} from 'src/utils/specLayout';

const InputText = styled.input.attrs(props => ({
  autoComplete: 'off', // to remove Webkit browser's default style that cannot be overriden. See https://stackoverflow.com/questions/2338102/overrideq-browser-form-filling-and-input-highlighting-with-html-css
  type: 'text',
}))`
  background-color: ${color.input.background};
  border-color: ${color.input.border};
  border-style: solid;
  border-width: ${input.borderWidth.inactive}px;
  color: ${color.input.font};

  &:active,
  &:hover,
  &:focus {
    border-width: ${input.borderWidth.active}px;
    outline: none;
  }

  ${props =>
    props.error &&
    `
    background-color: ${color.input.error};
    border-color: ${color.input.error};
    color: ${color.input.onError};
    & ~ label {
      color: ${color.input.onError};
    }
  `}
`;

InputText.propTypes = {
  error: PropTypes.bool,
};

export default InputText;
