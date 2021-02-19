import styled from 'styled-components';

import {boxSize} from 'src/utils/layout';
import {formNumberSmall} from 'src/utils/designSpecs';

import {fontCssGenerator} from 'src/utils/getFontCss';
import {scale, typescale} from 'src/utils/specFont';

import {mediaQuery} from 'src/utils/breakpoints';
import remify from 'src/utils/remify';

import Input from 'src/elements/Input';
import Label from 'src/elements/Label';

const FormNumberSmall = styled.form`
  background-color: inherit;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

FormNumberSmall.InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  ${boxSize.formNumberSmall}
`;

const padding = {
  top:
    formNumberSmall.whitespace.aboveLabel +
    formNumberSmall.capheight.label +
    formNumberSmall.whitespace.aboveInputValue -
    formNumberSmall.whitespace.belowInputValue -
    2,
};

FormNumberSmall.Input = styled(Input).attrs(props => ({
  inputMode: 'decimal',
}))`
  ${fontCssGenerator(typescale.inputMedium)}
  border-radius: 100%;
  height: 100%;
  padding-top: ${remify(padding.top)};
  text-align: center;
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    padding-top: ${remify(padding.top * scale)};
  }
`;

FormNumberSmall.Label = styled(Label)`
  align-self: center;
  position: absolute;
  top: ${remify(formNumberSmall.whitespace.aboveLabel)};
  @media only screen and ${mediaQuery.font} {
    top: ${remify(formNumberSmall.whitespace.aboveLabel * scale)};
  }
`;

export default FormNumberSmall;
