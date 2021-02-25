import styled from 'styled-components';

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
  color: ${color.font};

  &:active,
  &:hover,
  &:focus {
    border-width: ${input.borderWidth.active}px;
    outline: none;
  }
`;

export default InputText;
