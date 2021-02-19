import styled from 'styled-components';

import {boxSize} from 'src/utils/layout';
import {formColorCode, input, scale} from 'src/utils/designSpecs';
import {mediaQuery} from 'src/utils/breakpoints';
import remify from 'src/utils/remify';

import {fontCssGenerator} from 'src/utils/getFontCss';
import {typescale} from 'src/utils/specFont';

import Input from 'src/elements/Input';
import Label from 'src/elements/Label';

const FormColorCode = styled.form`
  background-color: inherit;
  position: relative;
  ${boxSize.formColorCode}
`;

// Text crop and other adjustments
const padding = {
  bottom: formColorCode.whitespace.belowInputValue - 12,
  left: formColorCode.whitespace.left - 2.25,
  top:
    formColorCode.whitespace.aboveLabel +
    formColorCode.capheight.label +
    formColorCode.whitespace.aboveInputValue -
    10,
};

FormColorCode.Input = styled(Input)`
  ${fontCssGenerator(typescale.inputLarge)}

  border-radius: 4px;
  padding-bottom: ${remify(padding.bottom)};
  padding-left: ${remify(padding.left)};
  padding-top: ${remify(padding.top)};
  text-align: left;
  width: 100%;

  &:active,
  &:hover,
  &:focus {
    padding-bottom: ${remify(padding.bottom - 1)};
    padding-left: ${remify(padding.left - 1)};
    padding-top: ${remify(padding.top - 1)};
  }

  @media only screen and ${mediaQuery.font} {
    padding-bottom: ${remify(padding.bottom * scale)};
    padding-left: ${remify(padding.left * scale)};
    padding-top: ${remify(padding.top * scale)};
    &:active,
    &:hover,
    &:focus {
      padding-bottom: ${remify(padding.bottom * scale - 1)};
      padding-left: ${remify(padding.left * scale - 1)};
      padding-top: ${remify(padding.top * scale - 1)};
    }
  }
`;

FormColorCode.Label = styled(Label)`
  position: absolute;
  top: ${remify(
    formColorCode.whitespace.aboveLabel + input.borderWidth.inactive,
  )};
  left: ${remify(formColorCode.whitespace.left + input.borderWidth.inactive)};
  @media only screen and ${mediaQuery.font} {
    top: ${remify(
      formColorCode.whitespace.aboveLabel * scale + input.borderWidth.inactive,
    )};
    left: ${remify(
      formColorCode.whitespace.left * scale + input.borderWidth.inactive,
    )};
  }
  transform: translateX(-0.08em); /* To be left-aligned with input text */
`;

export default FormColorCode;
