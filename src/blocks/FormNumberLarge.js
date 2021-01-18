import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, scale, textcrop, typescale} from 'src/utils/typography';
import {formNumberLarge} from 'src/utils/layout';
import {mediaQuery} from 'src/utils/breakpoints';

import H2 from 'src/elements/H2';
import Output from 'src/elements/Output';
import Paragraph from 'src/elements/Paragraph';
import Unit from 'src/elements/Unit';

const FormNumberLarge = styled.section`
  background-color: inherit;
  width: auto;
`;

FormNumberLarge.H2 = H2;

FormNumberLarge.InnerWrapper = styled.div`
  align-items: baseline; /* Bottom-align */
  display: flex;
  height: ${formNumberLarge.capheight.output}px; /* Text crop */
  justify-content: flex-end; /* Left-align */
  position: relative; /* to position Unit */
  @media only screen and ${mediaQuery.font} {
    height: ${formNumberLarge.capheight.output * scale}px;
  }
`;

FormNumberLarge.Output = styled(Output)`
  padding-right: 20px;
`;

FormNumberLarge.Paragraph = Paragraph;

FormNumberLarge.SpacerAboveOutput = styled.div`
  height: ${formNumberLarge.whitespace.aboveOutput}px;
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${formNumberLarge.whitespace.aboveOutput * scale}px;
  }
`;

FormNumberLarge.SpacerBelowH2 = styled.div`
  height: ${formNumberLarge.whitespace.belowH2}px;
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${formNumberLarge.whitespace.belowH2 * scale}px;
  }
`;

FormNumberLarge.SpacerBelowOutput = styled.div`
  height: ${formNumberLarge.whitespace.belowOutput}px;
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${formNumberLarge.whitespace.belowOutput * scale}px;
  }
`;

FormNumberLarge.Unit = styled(Unit)`
  bottom: 0;
  position: absolute;
`;

FormNumberLarge.propTypes = {};

export default FormNumberLarge;
