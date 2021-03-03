import styled from 'styled-components';
import PropTypes from 'prop-types';

import {formNumberSmall} from 'src/utils/specLayout';

import {fontCssGenerator} from 'src/utils/getFontCss';
import {font, scale} from 'src/utils/specFont';

import {mediaQuery} from 'src/utils/breakpoints';
import {responsiveBoxSize} from 'src/utils/getLayoutCss';

import remify from 'src/utils/remify';

import InputNumber from 'src/elements/InputNumber';
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
  ${responsiveBoxSize(formNumberSmall.diameter, formNumberSmall.diameter)}
`;

const padding = {
  top:
    formNumberSmall.whitespace.aboveLabel +
    formNumberSmall.capheight.label +
    formNumberSmall.whitespace.aboveInputValue -
    formNumberSmall.whitespace.belowInputValue -
    2,
};

FormNumberSmall.InputNumber = styled(InputNumber)`
  ${fontCssGenerator(font.formNumberSmall)}
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

FormNumberSmall.InputNumber.propTypes = {
  h: PropTypes.bool,
  sl: PropTypes.bool,
};

export default FormNumberSmall;
